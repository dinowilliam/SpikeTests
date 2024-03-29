﻿using System;
using System.Collections.Generic;
using Nelibur.ObjectMapper;

namespace SpikeTest.SearchEngine.DAL.Services {

    using SpikeTest.SearchEngine.DAL.Infra.Contexts;
    using SpikeTest.SearchEngine.DAL.Infra.Contracts;
    using SpikeTest.SearchEngine.DAL.Repositorys;
    using SpikeTest.SearchEngine.DAL.Repositorys.Models;
    using SpikeTest.SearchEngine.DAL.Services.Contracts;
    using SpikeTest.SearchEngine.Domain.Entities;    

    public class LogServiceCommands : ILogServiceCommands   {

        private readonly MicroservicesSpikeCommandsContext context;
        
        IRepositoryCommands<LogPersistance> logPersistanceCommands { get; set; }

        public LogServiceCommands(MicroservicesSpikeCommandsContext context) {
            this.context = context;
            this.logPersistanceCommands = new LogRepositoryCommands(this.context);
        }             
        
        public int Save(LogMessage log) {

            TinyMapper.Bind<LogMessage, LogPersistance>();
            var localLog = TinyMapper.Map<LogPersistance>(log);

            if (localLog.Id == Guid.Empty ){
                localLog.Id = Guid.NewGuid();
                return logPersistanceCommands.Insert(localLog);
            }
            else {
                return logPersistanceCommands.Update(localLog);
            }
            
        }

        public int AddRange(List<LogMessage> logs) {

            TinyMapper.Bind<List<LogMessage>, List<LogPersistance>>();
            var listLog = TinyMapper.Map<List<LogPersistance>>(logs);

            return logPersistanceCommands.AddRange(listLog);
        }
        
        public int Delete(LogMessage log) {
            
            int deleteReturn;            

            try {
                TinyMapper.Bind<LogMessage, LogPersistance>();
                var localLog = TinyMapper.Map<LogPersistance>(log);
                logPersistanceCommands.Delete(localLog);
                deleteReturn = 0;
            }
            catch (Exception) {
                deleteReturn = 1;
            }

            return deleteReturn;
        }
        

    }
}