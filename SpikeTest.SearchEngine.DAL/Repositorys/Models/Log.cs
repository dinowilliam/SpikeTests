using MicroservicesSpike.DAL.Infra.Contracts;
using System;
using System.Collections.Generic;
using System.Net;

#nullable disable

namespace MicroservicesSpike.DAL.Repositorys.Models
{
    public partial class LogPersistance : IEntity {
        public Guid Id { get; set; }        
        public DateTime? OccurrenceeDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Source { get; set; }
    }
}
