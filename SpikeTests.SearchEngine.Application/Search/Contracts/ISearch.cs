using SpikeTests.SearchEngine.Appplication.Models;

namespace SpikeTests.SearchEngine.Application.Search.Contracts {
    public interface ISearch {
       
        bool Start();
       
        SearchResult[] GetResults();

    }
}
