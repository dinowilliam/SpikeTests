using System.Runtime.Serialization;

namespace SpikeTests.Infra.Support.CircuitBreaker.Exceptions {
    [Serializable]
    public class CircuitBreakerOpenException : Exception {
        private Exception circuitBreakerOpenException;

        public CircuitBreakerOpenException() {
        }

        public CircuitBreakerOpenException(Exception lastException) {
            this.circuitBreakerOpenException = lastException;
        }

        public CircuitBreakerOpenException(string? message) : base(message) {
        }

        public CircuitBreakerOpenException(string? message, Exception? innerException) : base(message, innerException) {
        }

        protected CircuitBreakerOpenException(SerializationInfo info, StreamingContext context) : base(info, context) {
        }
    }
}