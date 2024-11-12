using Riok.Mapperly.Abstractions;

namespace SpikeTest.SearchEngine.Api.Mappers {

    [Mapper]
    public partial class SearchMapper {
        public partial SpikeTests.SearchEngine.Application.Search.Models.SearchTerms SearchToApplicationSearch(SpikeTests.SearchEngine.Api.Models.Search search);
    }
}
