using Autofac;
using SpikeTests.SearchEngine.Application.Contracts;
using SpikeTests.SearchEngine.Application.Crawler;

namespace SpikeTests.SearchEngine.Api {
    internal class AutofacModule : Module {
        
        protected override void Load(ContainerBuilder builder) {
            builder.RegisterType<Application.Application>().As<IApplication>();
            builder.RegisterType<Crawler>().As<ICrawler>();
        }
    }
}