namespace SpikeTests.Infra.Support.Workflow.Contracts {
    public interface IFluxQueue {

        IList<IFlux> fluxes { get; set; }
        bool Push(IFlux flux);
        IFlux Pop();
        bool ProcessQueue();
    }
}
