namespace SpikeTests.Infra.Support.Workflow.Contracts {
    public interface IStep {
        IWorkflow Workflow { get; set; }
        String Code { get; set; }
        String Name { get; set; }
        int Order { get; set; }
        String Command { get; set; }
        String Options { get; set; }
    }
}
