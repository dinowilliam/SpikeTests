using System;

namespace SpikeTests.SearchEngine.DAL.Repositorys.Models
{

    using SpikeTests.SearchEngine.DAL.Infra.Contracts;

    public partial class LogPersistance : IEntity {
        public Guid Id { get; set; }        
        public DateTime? OccurrenceeDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Source { get; set; }
    }
}
