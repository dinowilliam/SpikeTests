using SpikeTests.SearchEngine.Application.Crawler.Contracts;
using SpikeTests.SearchEngine.Application.Search.Models;

namespace SpikeTests.SearchEngine.Application.Crawler {

    public class Crawler : ICrawler {

        readonly Random rng;
        SearchResult[] searchResults;


        public Crawler() {
            rng = new Random();
        }

        public bool Start() {

            try {
                
            }
            catch (Exception ex) {
                return false;
            }

            return true;
        }

        public SearchResult[] GetResults() {
            return searchResults;
        }

    }
}
