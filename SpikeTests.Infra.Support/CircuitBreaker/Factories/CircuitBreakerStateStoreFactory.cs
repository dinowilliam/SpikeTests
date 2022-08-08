using SpikeTests.Infra.Support.CircuitBreaker.Contracts;

namespace SpikeTests.Infra.Support.CircuitBreaker.Factories {
    public static class CircuitBreakerStateStoreFactory {
        public static ICircuitBreakerStateStore GetCircuitBreakerStateStore() {
            return new InMemoryCircuitBreakerStateStore();
        }
    }
}
