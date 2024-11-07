using System;
using System.Collections.Generic;

namespace SpikeTests.SearchEngine.DAL.Services.Contracts {

    using SpikeTests.SearchEngine.Domain.Entities;

    public interface ILogServiceQueries    {        
        public IEnumerable<LogMessage> GetAll();
        public LogMessage GetById(Guid id);
        public IEnumerable<LogMessage> LogFilter(LogSearch logSearch);
    }
}
