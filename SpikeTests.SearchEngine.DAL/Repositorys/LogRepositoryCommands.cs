using SpikeTests.SearchEngine.DAL.Infra;
using SpikeTests.SearchEngine.DAL.Infra.Contexts;
using SpikeTests.SearchEngine.DAL.Infra.Contracts;
using SpikeTests.SearchEngine.DAL.Repositorys.Models;

namespace SpikeTests.SearchEngine.DAL.Repositorys {
    public class LogRepositoryCommands : BaseRepositoryCommands<LogPersistance, MicroservicesSpikeCommandsContext>, IRepositoryCommands<LogPersistance>
    {
        public LogRepositoryCommands(MicroservicesSpikeCommandsContext dataContext) : base(dataContext) {
        }
    }

}
