using System;

#nullable disable

namespace SpikeTest.SearchEngine.DAL.Repositorys.Models
{

    using SpikeTest.SearchEngine.DAL.Infra.Contracts;

    public partial class LogPersistance : IEntity {
        public Guid Id { get; set; }        
        public DateTime? OccurrenceeDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Source { get; set; }
    }
}
