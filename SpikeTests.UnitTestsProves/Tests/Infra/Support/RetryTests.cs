using Moq;
using SpikeTests.Infra.Support.CircuitBreaker;
using SpikeTests.Infra.Support.CircuitBreaker.Contracts;
using SpikeTests.Infra.Support.CircuitBreaker.Exceptions;
using SpikeTests.Infra.Support.Retry;
using SpikeTests.Infra.Support.Retry.Contracts;
using SpikeTests.UnitTestsProves.Subjects.Contracts;

namespace SpikeTests.UnitTestsProves.Tests.Infra.Support
{
    public class RetryTests
    {

        IRetry retry;
        ICircuitBreaker circuitBreaker;
        Mock<IHttpClientSubject> httpClientSubjectConfig;
        IHttpClientSubject httpClientSubject;
        Exception exceptionThrowed;
        string streamToSend;

        [SetUp]
        public void Setup()
        {
            retry = new Retry();
            circuitBreaker = new CircuitBreaker(100);
            httpClientSubjectConfig = new Mock<IHttpClientSubject>();
            streamToSend = "request";
        }

        [Test]
        public void Retry_WhenTheConnectionToRemoteServiceTries5Times_WithSuccess()
        {

            //Arrange                        
            httpClientSubjectConfig.Setup(client => client.Request(streamToSend)).Throws(new Exception());
            httpClientSubject = httpClientSubjectConfig.Object;

            //Act
            try
            {
                retry.Do(() =>
                {
                    circuitBreaker.ExecuteAction(() => { httpClientSubject.Request(streamToSend); });
                }, 500, 5);
            }
            catch (Exception ex)
            {
                exceptionThrowed = ex;
            }

            //Assert
            httpClientSubjectConfig.Verify(client => client.Request(streamToSend), Times.Exactly(5));
        }

        [Test]
        public void Retry_WhenTheConnectionToRemoteServiceTries5Times_FailDueToCircuitBreakerOpenException()
        {

            //Arrange                        
            httpClientSubjectConfig.Setup(client => client.Request(streamToSend)).Throws(new CircuitBreakerOpenException());
            httpClientSubject = httpClientSubjectConfig.Object;

            //Act
            try
            {
                retry.Do(() =>
                {
                    circuitBreaker.ExecuteAction(() => { httpClientSubject.Request(streamToSend); });
                }, 500, 5);
            }
            catch (Exception ex)
            {
                exceptionThrowed = ex;
            }

            //Assert
            httpClientSubjectConfig.Verify(client => client.Request(streamToSend), Times.Exactly(1));
        }

        [TearDown]

        public void TearDown()
        {
            retry = null;
            circuitBreaker = null;
            httpClientSubjectConfig = null;
            httpClientSubject = null;
            exceptionThrowed = null;
            streamToSend = string.Empty;
        }
    }
}