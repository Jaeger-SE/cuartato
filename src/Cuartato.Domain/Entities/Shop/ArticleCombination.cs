using System.Collections.Generic;

namespace Cuartato.Domain.Entities.Shop
{
    public class ArticleCombination
    {
        public ArticleCombination()
        {
            AvalaibleSecondaryColors = new List<Color>();
        }

        public Color Main { get; set; }
        public IList<Color> AvalaibleSecondaryColors { get; set; }
    }
}