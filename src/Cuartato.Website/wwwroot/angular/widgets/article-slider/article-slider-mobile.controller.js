(function () {
    "use strict";

    function articleSliderMobileController(articleService, galleryContext) {
        var vm = this;

        // Fields
        vm.articles = [];

        vm.openModal = undefined;

        // Functions implementation
        function init() {
            articleService.getArticles()
                .then(function (response) {
                    angular.copy(response.data, vm.articles);
                }, function () {
                    console.log("[Error]: An error has occured when fetching article list");
                });
        }

        function clickOn(index, article) {
            galleryContext.articleSelected = article;
            galleryContext.hasChanged(galleryContext.source.articleSelection);
            vm.openModal();
        }

        // Functions mapping
        vm.init = init;
        vm.clickOn = clickOn;
    }

    // dependency injection
    articleSliderMobileController.$inject = ["articleService", "galleryContext"];

    /*
     * Module definition
     */
    var module;

    try {
        module = angular.module("cuartato");
    } catch (err) {
        module = angular.module("cuartato", ["kass-ui", "cuartato-services"]);
    }
    module.controller("articleSliderMobileController", articleSliderMobileController);
})();