using SpikeTests.Infra.Support.CircuitBreaker.Enums;

namespace SpikeTests.Infra.Support.CircuitBreaker.Contracts {
    public interface ICircuitBreakerStateStore {

        CircuitBreakerStateEnum State { get; }
        Exception LastException { get; }
        DateTime LastStateChangedDateUtc { get; }
        void Trip(Exception ex);
        void Reset();
        void HalfOpen();
        bool IsClosed { get; }

    }
}
