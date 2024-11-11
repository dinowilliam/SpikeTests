using Riok.Mapperly.Abstractions;
using SpikeTests.SearchEngine.Service.DTOs;
using SpikeTests.SearchEngine.Appplication.Models;

namespace SpikeTest.SearchEngine.Api.Mappers {

    [Mapper]
    public partial class SearchResultsMapper {
        public partial SearchResult[] SearchResulDTOToAppSearchResult(IEnumerable<SearchResultDTO> searchResults);
    }
}
