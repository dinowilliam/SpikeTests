using SpikeTests.Infra.Support.CircuitBreaker.Exceptions;
using SpikeTests.Infra.Support.Retry.Contracts;

namespace SpikeTests.Infra.Support.Retry
{
    public class Retry : IRetry {

        int interation;
        List<Exception> exceptionList;

        public Retry() { 
            interation = 0;
            exceptionList = new List<Exception>();
        }

        public Action Do(Action action, TimeSpan interval, int maxAttempts) {

            while (interation < maxAttempts) {

                try {

                    return action;
                }
                catch (CircuitBreakerOpenException cboex) {
                    exceptionList.Add(cboex);
                    break;
                }
                catch (Exception ex) {

                    exceptionList.Add(ex);
                }

                Thread.Sleep(interval);
            }

            throw new AggregateException(exceptionList);
        }
    }
}
