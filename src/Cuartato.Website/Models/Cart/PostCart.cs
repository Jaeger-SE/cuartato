using System;
using System.ComponentModel.DataAnnotations;

namespace Cuartato.Website.Models.Cart
{
    public class PostCart
    {
        [Required]
        public Guid ArticleId { get; set; }

        [Required]
        public Guid MainColorId { get; set; }

        [Required]
        public Guid SecondaryColorId { get; set; }

        //[Required]
        //public SizeEnum Size { get; set; }
    }
}