using SpikeTests.Infra.Support.Workflow.Contracts;

namespace SpikeTests.Infra.Support.Workflow {
    public class Maestro : IMaestro {

        private IFluxQueue fluxQueue;
        private bool IsRunningNow;
        private bool Finished;

        public Maestro(IFluxQueue fluxQueue) {
            this.fluxQueue = fluxQueue;
            this.IsRunningNow = false;
            this.Finished = false;
        }

        public bool IsRunning => this.IsRunningNow;

        public TimeOnly RunningTime => throw new NotImplementedException();

        public async Task<bool> Run() {

            return await Task.Run(() => {

                try {
                    this.IsRunningNow = true;

                    this.Finished = fluxQueue.ProcessQueue();

                    this.IsRunningNow = false;
                }
                catch (Exception ex) {

                    this.Finished = true;

                    throw ex;
                }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

                return this.Finished;

             });
        }
    }
}