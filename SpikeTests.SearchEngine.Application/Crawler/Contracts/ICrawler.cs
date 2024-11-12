using SpikeTests.SearchEngine.Appplication.Models;

namespace SpikeTests.SearchEngine.Application.Crawler.Contracts
{

    public interface ICrawler
    {

        bool Start();
        SearchResult[] GetResults();
    }

}
