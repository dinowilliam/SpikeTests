using Autofac;
using SpikeTests.SearchEngine.Application.Contracts;
using SpikeTests.SearchEngine.Application.Search;
using SpikeTests.SearchEngine.Application.Search.Contracts;
using SpikeTests.SearchEngine.Service;
using SpikeTests.SearchEngine.Service.Contracts;

namespace SpikeTests.SearchEngine.Api {
    internal class AutofacModule : Module {
        
        protected override void Load(ContainerBuilder builder) {

            builder.RegisterType<Application.Application>().As<IApplication>();
            builder.RegisterType<Search>().As<ISearch>();
            builder.RegisterType<SearchService>().As<ISearchService>();
            
        }
    }
}





















