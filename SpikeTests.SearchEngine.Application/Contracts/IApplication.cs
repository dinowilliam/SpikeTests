using SpikeTests.SearchEngine.Appplication.Models;

namespace SpikeTests.SearchEngine.Application.Contracts {
    public interface IApplication {

        IEnumerable<SearchResult> GetSearchResults(Search search);
    }
}
