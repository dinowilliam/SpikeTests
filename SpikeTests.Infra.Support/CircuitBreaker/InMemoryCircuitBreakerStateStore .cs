using SpikeTests.Infra.Support.CircuitBreaker.Contracts;
using SpikeTests.Infra.Support.CircuitBreaker.Enums;

namespace SpikeTests.Infra.Support.CircuitBreaker {
    public class InMemoryCircuitBreakerStateStore : ICircuitBreakerStateStore {
        public CircuitBreakerStateEnum State => throw new NotImplementedException();

        public Exception LastException => throw new NotImplementedException();

        public DateTime LastStateChangedDateUtc => throw new NotImplementedException();

        public bool IsClosed => throw new NotImplementedException();

        public void HalfOpen() {
            throw new NotImplementedException();
        }

        public void Reset() {
            throw new NotImplementedException();
        }

        public void Trip(Exception ex) {
            throw new NotImplementedException();
        }
    }
}