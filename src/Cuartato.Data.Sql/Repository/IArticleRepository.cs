using System;
using System.Collections.Generic;
using Cuartato.Domain.Entities.Shop;

namespace Cuartato.Data.Sql.Repository
{
    public interface IArticleRepository
    {
        IEnumerable<Article> GetAll();
        Article Get(Guid id);
    }
}