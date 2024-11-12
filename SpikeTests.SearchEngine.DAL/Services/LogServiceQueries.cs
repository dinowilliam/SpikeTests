using System;
using System.Collections.Generic;
using Nelibur.ObjectMapper;

namespace SpikeTests.SearchEngine.DAL.Services {

    using SpikeTests.SearchEngine.DAL.Infra.Contexts;
    using SpikeTests.SearchEngine.DAL.Infra.Contracts;
    using SpikeTests.SearchEngine.DAL.Repositorys;
    using SpikeTests.SearchEngine.DAL.Repositorys.Models;
    using SpikeTests.SearchEngine.DAL.Services.Contracts;
    using SpikeTests.SearchEngine.Domain.Entities;    

    public class LogServiceQueries : ILogServiceQueries   {

        private readonly DALQueriesContext context;

        public LogServiceQueries(DALQueriesContext context) {
            this.context = context;
            this.logPersistanceQueries = new LogRepositoryQueries(this.context);
        }

        IRepositoryQueries<LogPersistance> logPersistanceQueries { get; set; }
                
        public IEnumerable<LogMessage> GetAll() {

            var localListLog = logPersistanceQueries.List();

            TinyMapper.Bind<List<LogPersistance>, List<LogMessage>>(); 
            var listLog = TinyMapper.Map<List<LogMessage>>(localListLog);
            
            return listLog;
        }

        public LogMessage GetById(Guid id) {

            var localLog = logPersistanceQueries.Get(id);

            TinyMapper.Bind<LogPersistance, LogMessage>();
            var log = TinyMapper.Map<LogMessage>(localLog);

            return log;
        }

        public IEnumerable<LogMessage> LogFilter(LogSearch logSearch) {

            var localListLog = logPersistanceQueries.Where(m => m.Title.Equals(logSearch.Title) && m.OccurrenceeDate >= logSearch.InitialDate && m.OccurrenceeDate <= logSearch.FinalDate && m.Description.Contains(logSearch.Description));

            var listLog = TinyMapper.Map<List<LogMessage>>(localListLog);
            
            return listLog;
        }

    }
}