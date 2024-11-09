using Riok.Mapperly.Abstractions;
using System.Collections.Generic;

namespace SpikeTest.SearchEngine.Api.Mappers {

    [Mapper]
    public partial class SearchResultsMapper {
        public partial IEnumerable<SpikeTests.SearchEngine.Api.Models.SearchResult> SearchResultToApiSearchResult(IEnumerable<SpikeTests.SearchEngine.Appplication.Models.SearchResult> searchResults);
    }
}
