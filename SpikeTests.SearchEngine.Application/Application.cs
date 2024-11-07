using SpikeTests.SearchEngine.Application.Contracts;
using SpikeTests.SearchEngine.Appplication.Models;

namespace SpikeTests.SearchEngine.Application {
    public class Application : IApplication {

        private readonly ICrawler _crawler;

        private Application(ICrawler crawler) {
            _crawler = crawler;
        }

        public IEnumerable<SearchResult> GetSearchResults(Search search) {
            
            _crawler.Start();

            return _crawler.GetResults();
        }
    }
}
