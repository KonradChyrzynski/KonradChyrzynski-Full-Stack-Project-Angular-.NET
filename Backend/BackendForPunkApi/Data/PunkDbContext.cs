using Microsoft.EntityFrameworkCore;
using PunkApiApp;

namespace BackendForPunkApi.Data
{
    public class PunkDbContext : DbContext
    {
        public PunkDbContext(DbContextOptions options) : base(options) {  }

        public DbSet<User> User { get; set; }
    }
}
