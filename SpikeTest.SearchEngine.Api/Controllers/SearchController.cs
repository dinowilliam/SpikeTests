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
            var rng = new Random();
            return Enumerable.Range(1, 500).Select(index => new SearchResult {
                Date = DateTime.Now.AddDays(index),
                Url = "http://www.dinowilliam.com",
                Title = "dinowilliam.com - dinowilliam.com",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }).ToArray();
        }
    }
}
