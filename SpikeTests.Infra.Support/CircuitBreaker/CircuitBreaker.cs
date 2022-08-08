using SpikeTests.Infra.Support.CircuitBreaker.Contracts;

namespace SpikeTests.Infra.Support.CircuitBreaker {
    public class CircuitBreaker : ICircuitBreaker {
        public bool IsClosed => throw new NotImplementedException();

        public bool IsOpen => throw new NotImplementedException();

        public void ExecuteAction(Action action) {
            throw new NotImplementedException();
        }

        public void TrackException(Exception ex) {
            throw new NotImplementedException();
        }
    }
}