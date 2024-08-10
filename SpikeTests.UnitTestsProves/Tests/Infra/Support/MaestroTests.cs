using FluentAssertions;
using Moq;

namespace SpikeTests.UnitTestsProves.Tests.Infra.Support
{

    using SpikeTests.Infra.Support.Workflow;
    using SpikeTests.Infra.Support.Workflow.Contracts;

    public class MaestroTests
    {

        IMaestro maestro;
        Mock<IFluxQueue> mockConfigFluxQueue;
        IFluxQueue mockFluxQueue;

        [SetUp]
        public void Setup()
        {
            mockConfigFluxQueue = new Mock<IFluxQueue>();
        }

        [Test]
        public void Maestro_WhenWorflowRunsAndProcess_Succeed()
        {

            //Arrange
            mockConfigFluxQueue.Setup(stub => stub.ProcessQueue()).Returns(true);
            mockFluxQueue = mockConfigFluxQueue.Object;
            maestro = new Maestro(mockFluxQueue);

            //Act
            var result = maestro.Run().Result;

            //Assert
            result.Should().BeTrue();
        }

        [Test]
        public void Maestro_WhenTheWorflowRunsAndProcess_Fails()
        {

            //Arrange                        
            mockConfigFluxQueue.Setup(stub => stub.ProcessQueue()).Returns(false);
            mockFluxQueue = mockConfigFluxQueue.Object;
            maestro = new Maestro(mockFluxQueue);

            //Act
            var result = maestro.Run().Result;
            

            //Assert
            result.Should().BeFalse();

        }

        [Test]
        public void Maestro_WhenTheWorflowRunsAndIsRunning_IsTrue()
        {

            //Arrange                                    
            mockConfigFluxQueue.Setup(stub => stub.ProcessQueue()).Callback(async () => Task.Delay(150000)).Returns(true);
            mockFluxQueue = mockConfigFluxQueue.Object;
            maestro = new Maestro(mockFluxQueue);

            //Act            
            maestro.Run();           
            var result = maestro.IsRunning;

            //Assert
            result.Should().BeTrue();

        }

        [Test]
        public void Maestro_WhenTheWorflowRunsAndIsRunning_IsFalse()
        {

            //Arrange                        
            mockConfigFluxQueue.Setup(stub => stub.ProcessQueue()).Returns(false);
            mockFluxQueue = mockConfigFluxQueue.Object;
            maestro = new Maestro(mockFluxQueue);

            //Act
            maestro.Run();
            Thread.Sleep(1000);
            var result = maestro.IsRunning;

            //Assert
            result.Should().BeFalse();

        }

        [TearDown]

        public void TearDown()
        {
            mockConfigFluxQueue = null;
            mockFluxQueue = null;
        }
    }
}