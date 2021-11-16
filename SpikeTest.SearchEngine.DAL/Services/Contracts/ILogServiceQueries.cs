using MicroservicesSpike.Domain.Entities;
using System;
using System.Collections.Generic;

namespace SpikeTest.SearchEngine.DAL.Services.Contracts {
    public interface ILogServiceQueries    {        
        public IEnumerable<LogMessage> GetAll();
        public LogMessage GetById(Guid id);
        public IEnumerable<LogMessage> LogFilter(LogSearch logSearch);
    }
}
