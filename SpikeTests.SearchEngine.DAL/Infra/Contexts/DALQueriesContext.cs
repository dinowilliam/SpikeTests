using SpikeTests.SearchEngine.DAL.Repositorys.Models;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Reflection;

#nullable disable
namespace SpikeTests.SearchEngine.DAL.Infra.Contexts
{
    public partial class DALQueriesContext : DbContext {

        string path = Path.GetDirectoryName(Assembly.GetEntryAssembly().Location);
        public DALQueriesContext(DbContextOptions<DALQueriesContext> options)
            : base(options) {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
    => options.UseSqlite($"DataSource={path}\\SearchEngine.sl3");


        public virtual DbSet<LogPersistance> Logs { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.HasAnnotation("Relational:Collation", "en_US.utf8");

            modelBuilder.Entity<LogPersistance>(entity => {
                entity.ToTable("Log");

                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Description).HasMaxLength(2048);

                entity.Property(e => e.Title).IsRequired();

                entity.Property(e => e.OccurrenceeDate).HasColumnType("timestamp with time zone");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
