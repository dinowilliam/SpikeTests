using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SpikeTest.SearchEngine.Api.Mappers;
using SpikeTests.SearchEngine.Api.Models;
using SpikeTests.SearchEngine.Application.Contracts;
using System.Collections.Generic;

namespace SpikeTests.SearchEngine.Api.Controllers {

    [ApiController]
    [Route("[controller]")]

    public class SearchController : ControllerBase {

        private readonly ILogger<SearchController> _logger;
        private readonly IApplication _application;

        public SearchController(IApplication application, ILogger<SearchController> logger) {
            _logger = logger;
            _application = application;
        }

        [HttpPost]
        public IEnumerable<SearchResult> GetSearchResults(Search search) {
            var mapperSearch = new SearchMapper();
            var mapperSearchResults = new SearchResultsMapper();
            return mapperSearchResults.SearchResultToApiSearchResult(_application.GetSearchResults(mapperSearch.SearchToApplicationSearch(search)));
        } 
    }
}

