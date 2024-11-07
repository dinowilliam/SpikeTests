using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SpikeTests.SearchEngine.Api.Models;
using System.Collections.Generic;

namespace SpikeTests.SearchEngine.Api.Controllers {
    
    [ApiController]
    [Route("[controller]")]
    public class SearchController : ControllerBase
    {        
        private readonly ILogger<SearchController> _logger;

        public SearchController(ILogger<SearchController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IEnumerable<SearchResult> GetSearchResults(Search search)
        {
          
        }
    }
}
