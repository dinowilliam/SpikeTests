using SpikeTests.SearchEngine.Appplication.Models;

namespace SpikeTests.SearchEngine.Application.Contracts {
    
    public interface ICrawler {
    
        bool Start();
        SearchResult[] GetResults();
    }

}
