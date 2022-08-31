using SpikeTests.Infra.Support.CircuitBreaker.Exceptions;
using SpikeTests.Infra.Support.Retry.Contracts;

namespace SpikeTests.Infra.Support.Retry
{
    public class Retry : IRetry {

        int interation;
        List<Exception> exceptionList;
        TimeSpan intervalInMilleseconds;

        public Retry() { 
            interation = 0;
            exceptionList = new List<Exception>();
        }

        public void Do(Action action, int interval, int maxAttempts) {

            intervalInMilleseconds = new TimeSpan(0, 0, 0, 0, interval);

            while (interation < maxAttempts) {
                
                interation++;

                try {
                    action();
                }
                catch (CircuitBreakerOpenException cboex) {
                    exceptionList.Add(cboex);
                    throw new AggregateException(exceptionList);                    
                }
                catch (Exception ex) {

                    exceptionList.Add(ex);
                }

                Thread.Sleep(intervalInMilleseconds);
            }

            throw new AggregateException(exceptionList);
        }
    }
}
