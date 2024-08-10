namespace SpikeTests.Infra.Support.Workflow.Contracts {
    public interface IMaestro {
        Task<bool> Run();
        bool IsRunning { get; }
        TimeOnly RunningTime { get; }
    }
}
