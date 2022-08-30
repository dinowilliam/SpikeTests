namespace SpikeTests.Infra.Support.Retry.Contracts {
    public interface IRetry  {
        Action Do(Action action, TimeSpan interval, int maxAttempts);
    }
}