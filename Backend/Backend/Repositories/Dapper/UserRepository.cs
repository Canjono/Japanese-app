using Backend.Repositories.Interfaces;
using Microsoft.Extensions.Configuration;
using System;

namespace Backend.Repositories.Dapper
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(IConfiguration configuration) : base(configuration)
        {
        }

        public bool Login(string nickname, string password)
        {
            throw new NotImplementedException();
        }

        public bool Logout()
        {
            throw new NotImplementedException();
        }
    }
}
