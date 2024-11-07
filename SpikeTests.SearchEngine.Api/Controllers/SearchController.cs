using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SpikeTest.SearchEngine.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace SpikeTest.SearchEngine.Api.Controllers {
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
