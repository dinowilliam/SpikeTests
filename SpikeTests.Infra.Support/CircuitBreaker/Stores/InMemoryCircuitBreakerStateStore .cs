using SpikeTests.Infra.Support.CircuitBreaker.Contracts;
using SpikeTests.Infra.Support.CircuitBreaker.Enums;

namespace SpikeTests.Infra.Support.CircuitBreaker.Stores {
    public class InMemoryCircuitBreakerStateStore : ICircuitBreakerStateStore {
        
        public InMemoryCircuitBreakerStateStore() {
            State = CircuitBreakerStateEnum.Closed;         
        }

        public CircuitBreakerStateEnum State { get; internal set; }

        public Exception LastException { get; internal set; }

        public DateTime LastStateChangedDateUtc { get; internal set ; }

        public bool IsClosed { get => State == CircuitBreakerStateEnum.Closed ? true: false; }

        public void HalfOpen() {
            State = CircuitBreakerStateEnum.HalfOpen;
        }

        public void Reset() {
            State = CircuitBreakerStateEnum.Closed;
        }

        public void Trip(Exception ex) {
            State = CircuitBreakerStateEnum.Open;

            LastException = ex;
        }
    }
}