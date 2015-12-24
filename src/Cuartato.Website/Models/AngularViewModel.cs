namespace Cuartato.Website.Models
{
    public class AngularViewModel
    {
        public AngularViewModel(string angularAppName)
        {
            AngularAppName = angularAppName;
        }

        public string AngularAppName { get; }
        public bool IsAngularActivated => !string.IsNullOrWhiteSpace(AngularAppName);
    }
}