using SpikeTests.SearchEngine.Application.Contracts;
using SpikeTests.SearchEngine.Application.Search.Contracts;
using SpikeTests.SearchEngine.Appplication.Models;

namespace SpikeTests.SearchEngine.Application {
    public class Application : IApplication {

        private readonly ISearch _search;

        public Application(ISearch search) {
            _search = search;
        }

        public IEnumerable<SearchResult> GetSearchResults(SearchTerms searchTerms) {

            _search.Start();

            return _search.GetResults();
        }
    }
}
