using System;

namespace SpikeTests.SearchEngine.DAL.Infra.Contracts {
    public interface IEntity {
        Guid Id { get; set; }
    }
}
