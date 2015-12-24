using Microsoft.AspNet.Mvc;

namespace Cuartato.Website.Controllers
{
    [Route("page")]
    public class PageController : Controller
    {
        [HttpGet("{contextName}")]
        [HttpGet("{contextName}/{viewName}")]
        public IActionResult Index(string contextName, string viewName = null)
        {
            return View($"~/Views/{contextName}/_{viewName ?? "Index"}Partial.cshtml");
        }
    }
}