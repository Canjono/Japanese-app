﻿using Backend.GraphQlTypes;
using Backend.Repositories.Interfaces;
using GraphQL;
using GraphQL.Http;
using GraphQL.Types;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Backend.Middlewares
{
    public class GraphQlMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IVocabularyRepository _vocabularyRepository;

        public GraphQlMiddleware(RequestDelegate next, IVocabularyRepository vocabularyRepository)
        {
            _next = next ?? throw new ArgumentException(nameof(next));
            _vocabularyRepository = vocabularyRepository ?? throw new ArgumentException(nameof(vocabularyRepository));
        }

        public async Task Invoke(HttpContext httpContext)
        {
            if (httpContext.Request.Path.StartsWithSegments("/graphql"))
            {
                var request = httpContext.Request;
                var response = httpContext.Response;

                //GraphQL HTTP only supports GET and POST methods.
                if (request.Method != "GET" && request.Method != "POST")
                {
                    Console.WriteLine("GraphQL HTTP method was not allowed. Use GET or POST.");
                    response.Headers.Add("Allow", "GET, POST");
                    response.StatusCode = 405;

                    return;
                }

                Console.WriteLine("A GraphQL request was registered.");

                var parameters = await GetParametersAsync(request);

                var schema = new Schema { Query = new VocabularyQuery(_vocabularyRepository) };

                var result = await new DocumentExecuter().ExecuteAsync(options =>
                {
                    options.Schema = schema;
                    options.Query = parameters.Query;
                    options.OperationName = parameters.OperationName;
                    options.Inputs = parameters.GetInputs();
                });

                CheckForErrors(result);

                await WriteResult(httpContext, result);
            }
            else
            {
                await _next(httpContext);
            }
        }

        private static async Task<GraphQlParameters> GetParametersAsync(HttpRequest request)
        {
            // http://graphql.org/learn/serving-over-http/#http-methods-headers-and-body

            string body = null;
            if (request.Method == "POST")
            {
                // Read request body
                using (var sr = new StreamReader(request.Body))
                {
                    body = await sr.ReadToEndAsync();
                }
            }

            MediaTypeHeaderValue.TryParse(request.ContentType, out var contentType);

            GraphQlParameters parameters;

            switch (contentType.MediaType)
            {
                case "application/json":
                    // Parse request as json
                    parameters = JsonConvert.DeserializeObject<GraphQlParameters>(body);
                    break;

                case "application/graphql":
                    // The whole body is the query
                    parameters = new GraphQlParameters { Query = body };
                    break;

                default:
                    // Don't parse anything
                    parameters = new GraphQlParameters();
                    break;
            }

            string query = request.Query["query"];

            // Query string "query" overrides a query in the body
            parameters.Query = query ?? parameters.Query;

            return parameters;
        }

        private async Task WriteResult(HttpContext httpContext, ExecutionResult result)
        {
            var json = new DocumentWriter(indent: true).Write(result);

            httpContext.Response.StatusCode = 200;
            httpContext.Response.ContentType = "application/json";
            await httpContext.Response.WriteAsync(json);
        }

        private void CheckForErrors(ExecutionResult result)
        {
            if (result.Errors?.Count > 0)
            {
                var errors = new List<Exception>();
                foreach (var error in result.Errors)
                {
                    var ex = new Exception(error.Message);
                    if (error.InnerException != null)
                    {
                        ex = new Exception(error.Message, error.InnerException);
                    }
                    errors.Add(ex);
                }
                throw new AggregateException(errors);
            }
        }
    }
}