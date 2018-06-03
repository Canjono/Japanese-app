using Backend.Repositories.Interfaces;
using Backend.Repositories.Models;
using GraphQL.Types;

namespace Backend.GraphQlTypes
{
    public class VocabularyQuery : ObjectGraphType
    {
        public VocabularyQuery(IVocabularyRepository vocabularyRepository)
        {
            Field<ListGraphType<WordType>>(
                name: "getWords",
                resolve: context => vocabularyRepository.GetAllWords()
            );

            Field<BooleanGraphType>(
                name: "addWord",
                arguments: new QueryArguments(new QueryArgument[]
                {
                    new QueryArgument<StringGraphType> { Name = "name" },
                    new QueryArgument<StringGraphType> { Name = "translation" },
                    new QueryArgument<StringGraphType> { Name = "grammar" },
                    new QueryArgument<StringGraphType> { Name = "story" }
                }),
                resolve: context =>
                {
                    var name = context.GetArgument<string>("name");
                    var translation = context.GetArgument<string>("translation");
                    var grammar = context.GetArgument<string>("grammar");
                    var story = context.GetArgument<string>("story");

                    var word = new Word(name, translation, grammar, story);

                    return vocabularyRepository.AddWord(word);
                });

            Field<BooleanGraphType>(
                name: "updateWord",
                arguments: new QueryArguments(new QueryArgument[]
                {
                    new QueryArgument<StringGraphType> { Name = "id" },
                    new QueryArgument<StringGraphType> { Name = "name" },
                    new QueryArgument<StringGraphType> { Name = "translation" },
                    new QueryArgument<StringGraphType> { Name = "grammar" },
                    new QueryArgument<StringGraphType> { Name = "story" }
                }),
                resolve: context =>
                {
                    var id = context.GetArgument<string>("id");
                    var name = context.GetArgument<string>("name");
                    var translation = context.GetArgument<string>("translation");
                    var grammar = context.GetArgument<string>("grammar");
                    var story = context.GetArgument<string>("story");

                    var word = new Word(id, name, translation, grammar, story);

                    return vocabularyRepository.UpdateWord(word);
                });

            Field<BooleanGraphType>(
                name: "deleteWord",
                arguments: new QueryArguments(new QueryArgument<StringGraphType> { Name = "id", DefaultValue = "" }),
                resolve: context =>
                {
                    var id = context.GetArgument<string>("id");
                    return vocabularyRepository.DeleteWord(id);
                });

            Field<StringGraphType>(
                name: "hello",
                resolve: context => "world"
            );
        }
    }
}
