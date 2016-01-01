using System;
using System.Collections.Generic;

namespace Cuartato.Domain.Entities.Shop
{
    public class Article
    {
        public Article()
        {
            ArticleCombinations = new List<ArticleCombination>();
            Sizes = new List<Size>();
        }

        public Guid Id { get; set; }
        public string Title { get; set; }
        public string ImageUrl { get; set; }
        public IList<ArticleCombination> ArticleCombinations { get; set; }
        public IList<Size> Sizes { get; set; }
        public double Price { get; set; }
    }
}