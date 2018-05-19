using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Data;

namespace Backend.Repositories.Dapper
{
    public class BaseRepository
    {
        protected IDbConnection Connection;

        public BaseRepository(IConfiguration configuration)
        {
            var connectionString = configuration.GetValue<string>("ConnectionStrings:Localhost");
            //var connectionString = configuration.GetValue<string>("ConnectionStrings:Docker");
            Connection = new MySqlConnection(connectionString);
        }
    }
}
