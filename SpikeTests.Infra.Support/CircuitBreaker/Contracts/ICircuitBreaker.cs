namespace SpikeTests.Infra.Support.CircuitBreaker.Contracts {
    public interface ICircuitBreaker {
        
        bool IsClosed { get; }        
        bool IsOpen { get; }
        void ExecuteAction(Action action);
        void TrackException(Exception ex);

    }
}
