using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Cuartato.Domain.Entities.Shop;
using Newtonsoft.Json;

namespace Cuartato.Data.Sql.Repository.Fake
{
    public class JsonArticleRepository : IArticleRepository
    {
        private readonly IList<Article> _articles;

        public JsonArticleRepository(string jsonPath)
        {
            var json = File.ReadAllText(jsonPath);
            _articles = JsonConvert.DeserializeObject<IList<Article>>(json);
        }

        public IEnumerable<Article> GetAll()
        {
            return _articles;
        }

        public Article Get(Guid id)
        {
            return _articles.Single(x => x.Id == id);
        }
    }
}