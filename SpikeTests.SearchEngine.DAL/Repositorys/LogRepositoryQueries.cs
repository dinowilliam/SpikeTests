using SpikeTests.SearchEngine.DAL.Infra;
using SpikeTests.SearchEngine.DAL.Infra.Contexts;
using SpikeTests.SearchEngine.DAL.Infra.Contracts;
using SpikeTests.SearchEngine.DAL.Repositorys.Models;

namespace SpikeTests.SearchEngine.DAL.Repositorys {
    public class LogRepositoryQueries : BaseRepositoryQueries<LogPersistance, MicroservicesSpikeQueriesContext>, IRepositoryQueries<LogPersistance>
    {
        public LogRepositoryQueries(MicroservicesSpikeQueriesContext dataContext) : base(dataContext) {
        }
    }

}
