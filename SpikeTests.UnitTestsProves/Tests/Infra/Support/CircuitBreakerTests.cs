using Moq;
using SpikeTests.Infra.Support.CircuitBreaker;
using SpikeTests.Infra.Support.CircuitBreaker.Contracts;
using SpikeTests.UnitTestsProves.Subjects.Contracts;

namespace SpikeTests.UnitTestsProves.Tests.Infra.Support
{

    public class CircuitBreakerTests
    {

        ICircuitBreaker circuitBreaker;
        Mock<IHttpClientSubject> httpClientSubjectConfig;
        IHttpClientSubject httpClientSubject;
        Exception exceptionThrowed;
        string streamToSend;

        [SetUp]
        public void Setup()
        {
            circuitBreaker = new CircuitBreaker(100);
            httpClientSubjectConfig = new Mock<IHttpClientSubject>();
            streamToSend = "request";
        }

        [Test]
        public void CircuitBreaker_WhenTheConnectionToRemoteService_IsOpen()
        {

            //Arrange            
            httpClientSubjectConfig.Setup(client => client.Request(streamToSend)).Throws(new Exception());
            httpClientSubject = httpClientSubjectConfig.Object;

            //Act
            try
            {
                circuitBreaker.ExecuteAction(() => { httpClientSubject.Request(streamToSend); });
            }
            catch (Exception ex)
            {
                exceptionThrowed = ex;
            }

            //Assert
            Assert.That(circuitBreaker.IsOpen, Is.True);
        }


        [Test]
        public void CircuitBreaker_WhenTheConnectionToRemoteService_IsClosed()
        {

            //Arrange                        
            httpClientSubjectConfig.Setup(client => client.Request("")).Returns("Finished");
            httpClientSubject = httpClientSubjectConfig.Object;

            //Act            
            circuitBreaker.ExecuteAction(() => { httpClientSubject.Request(""); });

            //Assert
            Assert.That(circuitBreaker.IsClosed, Is.True);
        }


        [Test]
        public void CircuitBreaker_WhenTheConnectionToRemoteService_FailAndTryAgainIsClosed()
        {

            //Arrange            
            httpClientSubjectConfig.Setup(client => client.Request(streamToSend)).Throws(new Exception());
            httpClientSubjectConfig.Setup(client => client.Request("")).Returns("Finished");
            httpClientSubject = httpClientSubjectConfig.Object;

            //Act
            try
            {
                circuitBreaker.ExecuteAction(() => { httpClientSubject.Request(streamToSend); });
            }
            catch (Exception ex)
            {
                exceptionThrowed = ex;
            }

            circuitBreaker.ExecuteAction(() => { httpClientSubject.Request(""); });

            //Assert
            Assert.That(circuitBreaker.IsClosed, Is.True);
        }

        [TearDown]
        public void TearDown()
        {
            circuitBreaker = null;
            httpClientSubjectConfig = null;
            httpClientSubject = null;
            exceptionThrowed = null;
            streamToSend = string.Empty;
        }
    }
}