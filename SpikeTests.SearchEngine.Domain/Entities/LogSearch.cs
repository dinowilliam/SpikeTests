using System;

namespace SpikeTest.SearchEngine.Domain.Entities {
    public class LogSearch {

        public LogSearch() { }        
        public DateTime? InitialDate { get; set; }
        public DateTime? FinalDate { get; set; }
        public String Title { get; set; }
        public string Description { get; set; }

    }
}
