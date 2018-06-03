namespace Backend.Repositories.Interfaces
{
    public interface IUserRepository
    {
        bool Login(string nickname, string password);
        bool Logout();
    }
}
