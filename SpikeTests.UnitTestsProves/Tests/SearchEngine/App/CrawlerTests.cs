using SpikeTests.SearchEngine.Application;
using SpikeTests.SearchEngine.Application.Contracts;

namespace SpikeTests.UnitTestsProves.Tests.SearchEngine.App {

    public class CrawlerTests {

        ICrawler crawler;
        
        [SetUp]
        public void Setup()
        {
            crawler = new Crawler();            
        }

        [Test]
        public void Crawler_WhenTheCrawlerStatrs_ItStartSucesfull()
        {

            //Arrange            


            //Act
            var returnStart = crawler.Start();

            //Assert
            Assert.That(returnStart, Is.True);
        }
        

        [TearDown]
        public void TearDown()
        {
            crawler = null;            
        }
    }
}