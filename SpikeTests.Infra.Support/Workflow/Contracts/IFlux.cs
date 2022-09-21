namespace SpikeTests.Infra.Support.Workflow.Contracts {
    public interface IFlux {
        Guid Code { get; set; }
        IWorkflow Workflow { get; set; }
        TimeOnly StartTime  { get; set; }
        TimeOnly EndTime { get; set; }
    }
}
