using System;
using System.Collections.Generic;

namespace SpikeTest.SearchEngine.Service.Contracts {

    using SpikeTest.SearchEngine.Domain.Entities;

    public interface ISearchService {
        public int Save(LogMessage log);                
        public int Delete(Guid id);
        public IEnumerable<LogMessage> GetAll();
        public LogMessage GetById(Guid id);
        public IEnumerable<LogMessage> LogFilter(LogSearch logSearch);
        public int Upload(byte[] file);
        public DateTime ParseDateTimeLinq(string dateToParse);        
    }
}
