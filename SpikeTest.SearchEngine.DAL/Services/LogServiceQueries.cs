using System;
using System.Collections.Generic;
using Nelibur.ObjectMapper;

namespace MicroservicesSpike.DAL.Services {

    using MicroservicesSpike.DAL.Infra.Contexts;
    using MicroservicesSpike.DAL.Infra.Contracts;
    using MicroservicesSpike.DAL.Repositorys;
    using MicroservicesSpike.DAL.Repositorys.Models;
    using MicroservicesSpike.DAL.Services.Contracts;
    using MicroservicesSpike.Domain.Entities;    

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