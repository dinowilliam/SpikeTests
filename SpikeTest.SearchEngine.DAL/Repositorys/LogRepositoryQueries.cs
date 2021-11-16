using SpikeTest.SearchEngine.DAL.Infra;
using SpikeTest.SearchEngine.DAL.Infra.Contexts;
using SpikeTest.SearchEngine.DAL.Infra.Contracts;
using SpikeTest.SearchEngine.DAL.Repositorys.Models;

namespace SpikeTest.SearchEngine.DAL.Repositorys {
    public class LogRepositoryQueries : BaseRepositoryQueries<LogPersistance, MicroservicesSpikeQueriesContext>, IRepositoryQueries<LogPersistance>
    {
        public LogRepositoryQueries(MicroservicesSpikeQueriesContext dataContext) : base(dataContext) {
        }
    }

}
