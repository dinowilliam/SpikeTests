namespace SpikeTests.Infra.Support.Workflow.Contracts {
    public interface IWorkflow {
        String Code { get; set; }
        String Name { get; set; }
        TimeSpan Interval { get; set; }
        DateTime LastRun { get; set; }
        IList<IStep> Steps { get; set; }
    }
}
