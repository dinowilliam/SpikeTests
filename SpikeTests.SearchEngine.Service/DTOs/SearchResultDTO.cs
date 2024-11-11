using System;

namespace SpikeTests.SearchEngine.Service.DTOs {
    
    public class SearchResultDTO {
        public DateTime Date { get; set; }

        public string Title { get; set; }

        public string Url { get; set; }

        public string Description { get; set; }

        public string Summary { get; set; }
    }

}