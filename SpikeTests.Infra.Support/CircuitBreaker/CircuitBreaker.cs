using SpikeTests.Infra.Support.CircuitBreaker.Contracts;
using SpikeTests.Infra.Support.CircuitBreaker.Factories;

namespace SpikeTests.Infra.Support.CircuitBreaker {
    public class CircuitBreaker : ICircuitBreaker {

        private readonly ICircuitBreakerStateStore stateStore = CircuitBreakerStateStoreFactory.GetCircuitBreakerStateStore();

        private readonly object halfOpenSyncObject = new object();

        public bool IsClosed => stateStore.IsClosed;

        public bool IsOpen => !stateStore.IsClosed;

        public void ExecuteAction(Action action) {

            if (IsOpen) {
                // The circuit breaker is Open.
                //... (see code sample below for details)
            }

            // The circuit breaker is Closed, execute the action.
            try {
                action();
            }
            catch (Exception ex) {
                // If an exception still occurs here, simply
                // retrip the breaker immediately.
                this.TrackException(ex);

                // Throw the exception so that the caller can tell
                // the type of exception that was thrown.
                throw;
            }
        }

        public void TrackException(Exception ex) {
            // For simplicity in this example, open the circuit breaker on the first exception.
            // In reality this would be more complex. A certain type of exception, such as one
            // that indicates a service is offline, might trip the circuit breaker immediately.
            // Alternatively it might count exceptions locally or across multiple instances and
            // use this value over time, or the exception/success ratio based on the exception
            // types, to open the circuit breaker.
            this.stateStore.Trip(ex);
        }

    }
}