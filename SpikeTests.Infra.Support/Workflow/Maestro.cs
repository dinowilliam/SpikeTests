using SpikeTests.Infra.Support.Workflow.Contracts;

namespace SpikeTests.Infra.Support.Workflow {
    public class Maestro : IMaestro {

        private IFluxQueue fluxQueue;
        private bool IsRunningNow;

        public Maestro(IFluxQueue fluxQueue) {
            this.fluxQueue = fluxQueue;
            this.IsRunningNow = false;
        }

        public bool IsRunning => this.IsRunningNow;

        public TimeOnly RunningTime => throw new NotImplementedException();

        public bool Run() {

            try {
                this.IsRunningNow = true;

                return fluxQueue.ProcessQueue();
            }
            catch (Exception ex) {

                throw ex;                
            }
            finally {
                this.IsRunningNow = false;
            }
            
        }
    }
}