using System;
using System.Collections.Generic;

namespace SpikeTests.SearchEngine.Service {
    using SpikeTests.SearchEngine.Service.Contracts;
    using SpikeTests.SearchEngine.Service.DTOs;
    using System.Linq;

    public class SearchService : ISearchService  {        
        
        public SearchService() {
            
        }        

        public IEnumerable<SearchResultDTO> GetSearch() {
           
           return Enumerable.Range(1, 500).Select(index => new SearchResultDTO {
                Date = DateTime.Now.AddDays(index),
                Url = "https://www.dinowilliam.com",
                Title = "dinowilliam.com - Consectetur adipiscing elit",
                Description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }).ToArray();

        }
                        

    }

}
