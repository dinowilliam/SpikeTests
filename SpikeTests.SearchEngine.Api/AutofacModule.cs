using Autofac;
using SpikeTests.SearchEngine.Application.Contracts;

namespace SpikeTests.SearchEngine.Api {
    internal class AutofacModule : Module {
        
        protected override void Load(ContainerBuilder builder) {
            builder.RegisterType<Application.Application>().As<IApplication>();            
        }
    }
}