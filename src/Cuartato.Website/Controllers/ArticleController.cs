using System;
using System.Collections.Generic;
using Cuartato.Data.Sql.Repository;
using Cuartato.Data.Sql.Repository.Fake;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.PlatformAbstractions;

namespace Cuartato.Website.Controllers
{
    [Route("article")]
    public class ArticleController : Controller
    {
        private readonly IArticleRepository _articleRepository;

        public ArticleController(IApplicationEnvironment applicationEnvironment)
        {
            _articleRepository = new JsonArticleRepository($"{applicationEnvironment.ApplicationBasePath}/App_Data/Fakes/articles.json");
        }

        [HttpGet("")]
        public IEnumerable<object> GetAll()
        {
            return _articleRepository.GetAll();
        }
    }
}