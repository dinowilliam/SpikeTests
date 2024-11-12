using SpikeTests.SearchEngine.Application.Search.Models;

namespace SpikeTests.SearchEngine.Application.Search.Contracts {
    public interface ISearch {
       
        bool Start();
       
        SearchResult[] GetResults();

    }
}
