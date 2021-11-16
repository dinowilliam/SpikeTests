using System;
using System.Collections.Generic;

namespace SpikeTest.SearchEngine.DAL.Services.Contracts {

    using MicroservicesSpike.Domain.Entities;

    public interface ILogServiceCommands  {
        public int Save(LogMessage log);        
        public int Delete(LogMessage log);
        public int AddRange(List<LogMessage> logs);
    }
}
