using SpikeTest.SearchEngine.DAL.Infra;
using SpikeTest.SearchEngine.DAL.Infra.Contexts;
using SpikeTest.SearchEngine.DAL.Infra.Contracts;
using SpikeTest.SearchEngine.DAL.Repositorys.Models;

namespace SpikeTest.SearchEngine.DAL.Repositorys {
    public class LogRepositoryCommands : BaseRepositoryCommands<LogPersistance, MicroservicesSpikeCommandsContext>, IRepositoryCommands<LogPersistance>
    {
        public LogRepositoryCommands(MicroservicesSpikeCommandsContext dataContext) : base(dataContext) {
        }
    }

}
