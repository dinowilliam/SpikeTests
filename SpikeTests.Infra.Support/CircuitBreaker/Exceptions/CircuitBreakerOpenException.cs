using System.Runtime.Serialization;

namespace SpikeTests.Infra.Support.CircuitBreaker.Exceptions {
    [Serializable]
    internal class CircuitBreakerOpenException : Exception {
        private Exception lastException;

        public CircuitBreakerOpenException() {
        }

        public CircuitBreakerOpenException(Exception lastException) {
            this.lastException = lastException;
        }

        public CircuitBreakerOpenException(string? message) : base(message) {
        }

        public CircuitBreakerOpenException(string? message, Exception? innerException) : base(message, innerException) {
        }

        protected CircuitBreakerOpenException(SerializationInfo info, StreamingContext context) : base(info, context) {
        }
    }
}