using Microsoft.AspNetCore.Builder;

namespace SpikeTests {
    public class Program
    {
        public static void Main(string[] args)        {
            var builder = WebApplication.CreateBuilder(args);

            // Initialize Startup and configure services
            var startup = new Startup(builder.Configuration);
            startup.ConfigureServices(builder.Services);

            var app = builder.Build();
            // Configure the middleware pipeline
            startup.Configure(app, app.Environment);

            app.Run();
        }

       
    }
}
