using CadastroContatos.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CadastroContatos.Api.Context
{
    public class AppDbContext : DbContext
    {
        public DbSet<Contato> Contatos { get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> dbContext)
            : base(dbContext)
        {

        }
    }
}