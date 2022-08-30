using Moq;
using SpikeTests.Infra.Support.CircuitBreaker;
using SpikeTests.Infra.Support.CircuitBreaker.Contracts;
using SpikeTests.UnitTestsProves.Subjects.Contracts;

namespace SpikeTests.UnitTestsProves.Tests {  

    public class CircuitBreakerTests {

        ICircuitBreaker circuitBreaker;
        Mock<IHttpClientSubject> httpClientSubjectConfig;
        IHttpClientSubject httpClientSubject;
        string streamToSend;

        [SetUp]
        public void Setup() {
            circuitBreaker = new CircuitBreaker(100);
            httpClientSubjectConfig = new Mock<IHttpClientSubject>();
            streamToSend = "request";
        }
        
        [Test]
        public void CircuitBreaker_WhenTheConnectionToRemoteService_IsClosed() {

            //Arrange            
            httpClientSubjectConfig.Setup(client => client.Request(streamToSend)).Throws(new Exception());
            httpClientSubject = httpClientSubjectConfig.Object;

            //Act            
            httpClientSubject.Request(streamToSend);

            //Assert
            Assert.IsTrue(circuitBreaker.IsClosed);
        }

        [Test]
        public void CircuitBreaker_WhenTheConnectionToRemoteService_IsHalfClosed() {

            //Arrange            

            //Act            

            //Assert            
        }

        [Test]
        public void CircuitBreaker_WhenTheConnectionToRemoteService_IsOpen() {

            //Arrange            

            //Act            

            //Assert            
        }

        [TearDown]
        public void TearDown() {            

        }
    }
}