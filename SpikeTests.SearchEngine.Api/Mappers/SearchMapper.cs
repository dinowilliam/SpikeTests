﻿using Riok.Mapperly.Abstractions;

namespace SpikeTest.SearchEngine.Api.Mappers {

    [Mapper]
    public partial class SearchMapper {
        public partial SpikeTests.SearchEngine.Appplication.Models.Search SearchToApplicationSearch(SpikeTests.SearchEngine.Api.Models.Search search);
    }
}
