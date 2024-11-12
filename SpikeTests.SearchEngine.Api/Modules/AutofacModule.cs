using Autofac;

namespace SpikeTest.SearchEngine.Api.Modules {

    using SpikeTests.SearchEngine.Application;
    using SpikeTests.SearchEngine.Application.Contracts;
    using SpikeTests.SearchEngine.Application.Search;
    using SpikeTests.SearchEngine.Application.Search.Contracts;
    using SpikeTests.SearchEngine.DAL.Services;
    using SpikeTests.SearchEngine.DAL.Services.Contracts;
    using SpikeTests.SearchEngine.Service;
    using SpikeTests.SearchEngine.Service.Contracts;

    internal class AutofacModule : Module {

        protected override void Load(ContainerBuilder builder) {

            builder.RegisterType<Application>().As<IApplication>();
            builder.RegisterType<Search>().As<ISearch>();
            builder.RegisterType<SearchService>().As<ISearchService>();
            builder.RegisterType<LogServiceCommands>().As<ILogServiceCommands>();
            builder.RegisterType<LogServiceQueries>().As<ILogServiceQueries>();
            
        }
    }
}





















