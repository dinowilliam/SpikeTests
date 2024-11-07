using SpikeTests.SearchEngine.Application.Contracts;
using SpikeTests.SearchEngine.Appplication.Models;

namespace SpikeTests.SearchEngine.Application {
    public class Crawler : ICrawler {

        readonly Random rng;
        SearchResult[] searchResults;


        public Crawler() {
            rng = new Random();
        }

        public bool Start() {

            try {                
                searchResults = Enumerable.Range(1, 500).Select(index => new SearchResult {
                    Date = DateTime.Now.AddDays(index),
                    Url = "https://www.dinowilliam.com",
                    Title = "dinowilliam.com - Consectetur adipiscing elit",
                    Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                }).ToArray();
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
