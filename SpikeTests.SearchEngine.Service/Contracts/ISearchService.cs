using SpikeTests.SearchEngine.Service.DTOs;
using System;
using System.Collections.Generic;

namespace SpikeTests.SearchEngine.Service.Contracts {
    
    public interface ISearchService {
        
        IEnumerable<SearchResultDTO> GetSearch();

    }
}
