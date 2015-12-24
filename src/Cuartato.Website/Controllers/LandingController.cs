using Cuartato.Website.Models;
using Microsoft.AspNet.Mvc;

namespace Cuartato.Website.Controllers
{
    [Route("")]
    public class LandingController : Controller
    {
        [Route("")]
        public IActionResult Index()
        {
            return View(new AngularViewModel("cuartato"));
        }
    }
}