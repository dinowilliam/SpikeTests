using Autofac;
using SpikeTests.SearchEngine.Application.Contracts;
using SpikeTests.SearchEngine.Application.Crawler;
using SpikeTests.SearchEngine.Service;
using SpikeTests.SearchEngine.Service.Contracts;

namespace SpikeTests.SearchEngine.Api {
    internal class AutofacModule : Module {
        
        protected override void Load(ContainerBuilder builder) {

            builder.RegisterType<Application.Application>().As<IApplication>();
            builder.RegisterType<Crawler>().As<ICrawler>();
            builder.RegisterType<SearchService>().As<ISearchService>();
            
        }
    }
}