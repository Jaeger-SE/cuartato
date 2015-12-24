namespace Cuartato.Website.Models.Collection
{
    public class GalleryViewModel : AngularViewModel
    {
        public GalleryViewModel(string angularAppName) : base(angularAppName)
        {
        }

        public CollectionGender Gender { get; set; }
        public CollectionType? CollectionType { get; set; }
    }
}