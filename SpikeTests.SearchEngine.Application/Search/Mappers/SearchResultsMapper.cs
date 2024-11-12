using Riok.Mapperly.Abstractions;
using SpikeTests.SearchEngine.Application.Search.Models;
using SpikeTests.SearchEngine.Domain.Entities;

namespace SpikeTests.SearchEngine.Application.Search.Mappers {

    [Mapper]
    public partial class SearchResultsMapper {
        public partial SearchResult[] SearchResulDTOToAppSearchResult(IEnumerable<LogMessage> searchResults);
    }
}
