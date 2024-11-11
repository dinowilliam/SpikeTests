using SpikeTest.SearchEngine.Api.Mappers;
using SpikeTests.SearchEngine.Application.Contracts;
using SpikeTests.SearchEngine.Appplication.Models;
using SpikeTests.SearchEngine.Service.Contracts;

namespace SpikeTests.SearchEngine.Application.Crawler {
    
    public class Crawler : ICrawler {

        private readonly ISearchService _searchService;
        SearchResult[] searchResults;

        public Crawler(ISearchService searchService) {
            _searchService = searchService;
        }

        public bool Start() {

            try {
                var searchResultsMapper =  new SearchResultsMapper();
                searchResults = searchResultsMapper.SearchResulDTOToAppSearchResult(_searchService.GetSearch());
            }
            catch (Exception) {
                return false;
            }

            return true;
        }

        public SearchResult[] GetResults() {
            return searchResults;
        }

    }
}
