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
        public void Crawler_WhenTheCrawlerStarts_ItSucceed()
        {

            //Arrange            


            //Act
            var returnStart = crawler.Start();

            //Assert
            Assert.That(returnStart, Is.True);
        }

        [Test]
        public void Crawler_WhenTheCrawlerStarts_ItFails() {

            //Arrange            


            //Act
            var returnStart = crawler.Start();

            //Assert
            Assert.That(returnStart, Is.False);
        }


        [TearDown]
        public void TearDown()
        {
            crawler = null;            
        }
    }
}