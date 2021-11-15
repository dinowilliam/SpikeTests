using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace SpikeTests.UI.Pages {
    public class SearchModel : PageModel     {

        private readonly ILogger<SearchModel> _logger;

        public SearchModel(ILogger<SearchModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}
