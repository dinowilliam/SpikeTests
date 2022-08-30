using System;
using System.Collections.Generic;
using Nelibur.ObjectMapper;

namespace SpikeTest.SearchEngine.DAL.Services {

    using SpikeTest.SearchEngine.DAL.Infra.Contexts;
    using SpikeTest.SearchEngine.DAL.Infra.Contracts;
    using SpikeTest.SearchEngine.DAL.Repositorys;
    using SpikeTest.SearchEngine.DAL.Repositorys.Models;
    using SpikeTest.SearchEngine.DAL.Services.Contracts;
    using SpikeTest.SearchEngine.Domain.Entities;    

    public class LogServiceQueries : ILogServiceQueries   {

        private readonly MicroservicesSpikeQueriesContext context;

        public LogServiceQueries(MicroservicesSpikeQueriesContext context) {
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