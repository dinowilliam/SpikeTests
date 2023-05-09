using System;

namespace SpikeTest.SearchEngine.Api.Models
{
    public class SearchResult {
        public DateTime Date { get; set; }

        public string Url { get; set; }

        public string Description { get; set; }

        public string Summary { get; set; }
    }
}
