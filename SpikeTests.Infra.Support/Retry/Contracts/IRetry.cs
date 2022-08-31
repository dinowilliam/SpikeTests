namespace SpikeTests.Infra.Support.Retry.Contracts {
    public interface IRetry  {
        void Do(Action action, int interval, int maxAttempts);
    }
}