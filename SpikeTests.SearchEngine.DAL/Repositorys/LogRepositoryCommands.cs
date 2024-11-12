using SpikeTests.SearchEngine.DAL.Infra;
using SpikeTests.SearchEngine.DAL.Infra.Contexts;
using SpikeTests.SearchEngine.DAL.Infra.Contracts;
using SpikeTests.SearchEngine.DAL.Repositorys.Models;

namespace SpikeTests.SearchEngine.DAL.Repositorys {
    public class LogRepositoryCommands : BaseRepositoryCommands<LogPersistance, DALCommandsContext>, IRepositoryCommands<LogPersistance>
    {
        public LogRepositoryCommands(DALCommandsContext dataContext) : base(dataContext) {
        }
    }

}
