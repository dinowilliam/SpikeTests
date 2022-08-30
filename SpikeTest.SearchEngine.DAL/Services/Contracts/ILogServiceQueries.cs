using System;
using System.Collections.Generic;

namespace SpikeTest.SearchEngine.DAL.Services.Contracts {

    using SpikeTest.SearchEngine.Domain.Entities;

    public interface ILogServiceQueries    {        
        public IEnumerable<LogMessage> GetAll();
        public LogMessage GetById(Guid id);
        public IEnumerable<LogMessage> LogFilter(LogSearch logSearch);
    }
}
