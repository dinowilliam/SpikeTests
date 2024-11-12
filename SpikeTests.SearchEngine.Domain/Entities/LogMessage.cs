using System;

namespace SpikeTests.SearchEngine.Domain.Entities
{
    public class LogMessage {

        public LogMessage() {
        }

        public LogMessage(DateTime occurrencee, string title, string description, string source) {
            OccurrenceeDate = occurrencee;
            Title = title;
            Description = description;
            Source = source;
        }
        
        public void Update(DateTime occurrencee, string title, string description, string source) {            
            
            OccurrenceeDate = occurrencee;
            Title = title;
            Description = description ;
            Source = source;

        }

        public Guid Id { get; set; }        
        public DateTime? OccurrenceeDate { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Summary { get; set; }
        public string Source { get; set; }
        
    }
}
