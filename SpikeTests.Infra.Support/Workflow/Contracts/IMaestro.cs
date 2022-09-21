namespace SpikeTests.Infra.Support.Workflow.Contracts {
    public interface IMaestro {
        bool Run();
        bool IsRunning { get; }
        TimeOnly RunningTime { get; }
    }
}
