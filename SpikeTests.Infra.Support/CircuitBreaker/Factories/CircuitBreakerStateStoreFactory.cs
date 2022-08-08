using SpikeTests.Infra.Support.CircuitBreaker.Contracts;
using SpikeTests.Infra.Support.CircuitBreaker.Stores;

namespace SpikeTests.Infra.Support.CircuitBreaker.Factories {
    public static class CircuitBreakerStateStoreFactory {
        public static ICircuitBreakerStateStore GetCircuitBreakerStateStore() {
            return new InMemoryCircuitBreakerStateStore();
        }
    }
}
