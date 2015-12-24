(function() {
    "use strict";

    /**
     * Controller
     */
    function articleDetailController(articleService, cartService, articleGalleryContext) {
        var vm = this;

        // Fields
        vm.article = {};
        vm.selection = {
            mainColor: {},
            secondaryColor: {},
            size: {}
        };

        // Functions implementation
        function init() {
            articleService.getArticle(articleGalleryContext.articleSelected.Id)
                .then(function (response) {
                    angular.copy(response.data, vm.article);
                    angular.copy(vm.article.ArticleCombinations[0], vm.selection.mainColor);
                }, function () {
                    console.log("[Error]: An error has occured when fetching article detail");
                }); 
        }

        function chooseMainColor(color) {
            angular.copy(color, vm.selection.mainColor);
            angular.copy({}, vm.selection.secondaryColor);
        }

        function chooseSecondaryColor(color) {
            angular.copy(color, vm.selection.secondaryColor);
        }

        function chooseSize(size) {
            angular.copy(size, vm.selection.size);
        }

        function isFormValid() {
            if (vm.selection && vm.selection.mainColor.Main && vm.selection.secondaryColor.HtmlCode && vm.selection.size) {
                return vm.selection.mainColor.Main.HtmlCode && vm.selection.secondaryColor.HtmlCode && vm.selection.size.Id >= 0;
            }

            return false;
        }

        function post() {
            cartService.addToCart({
                ArticleId: vm.article.Id,
                MainColorId: vm.selection.mainColor.Main.Id,
                SecondaryColorId: vm.selection.secondaryColor.Id,
                Size: vm.selection.size.Id
            }).then(function () {
                alert("ok");
            }, function () {
                alert("pas ok");
            });
        }

        // Functions mapping
        vm.init = init;
        vm.chooseMainColor = chooseMainColor;
        vm.chooseSecondaryColor = chooseSecondaryColor;
        vm.chooseSize = chooseSize;
        vm.isFormValid = isFormValid;
        vm.post = post;
    }

    // dependency injection
    articleDetailController.$inject = ["articleService", "cartService", "articleGalleryContext"]; 

    /*
     * Module definition
     */
    var module;

    try {
        module = angular.module("cuartato");
    } catch (err) {
        module = angular.module("cuartato", ["kass-ui", "cuartato-services"]);
    }

    module.controller("articleDetailController", articleDetailController);
})();