using System;

namespace Backend.Repositories.Models
{
    public class User
    {
        public string Id { get; set; }
        public string Nickname { get; set; }
        public DateTime Created { get; set; }
    }
}
