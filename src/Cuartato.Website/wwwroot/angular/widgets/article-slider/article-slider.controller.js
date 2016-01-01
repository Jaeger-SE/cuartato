(function() {
    "use strict";

    /**
     * Controller
     */
    function articleSliderController($scope, articleService, articleGalleryContext, $state) {
        var vm = this;

        // Fields
        vm.articles = [];
        vm.activeIndex = -1;

        vm.openModal = undefined;

        // Functions implementation
        function init() {
            articleService.getArticles()
                .then(function(response) {
                    angular.copy(response.data, vm.articles);
                    vm.activeIndex = Math.floor((vm.articles.length - 1) / 2);
                }, function() {
                    console.log("[Error]: An error has occured when fetching article list");
                });
        }

        function nextSlide() {
            if (vm.activeIndex === vm.articles.length - 1) {
                vm.activeIndex = 0;
                return;
            }
            vm.activeIndex++;
        }

        function prevSlide() {
            if (vm.activeIndex === 0) {
                vm.activeIndex = vm.articles.length - 1;
                return;
            }
            vm.activeIndex--;
        }

        function navigateTo(index) {
            vm.activeIndex = index;
        }

        function clickOn(index, article) {
            if (vm.activeIndex !== index) {
                return vm.navigateTo(index);
            }

            articleGalleryContext.articleSelected = article;
            articleGalleryContext.hasChanged(articleGalleryContext.source.articleSelection);
            vm.openModal();
            $state.go("gallery.detail", { gender: "woman", articleType: "tshirt", articleId: article.Id });
            return 0;
        }

        function getTransformation(index) {
            var itemWidth = 100;
            var translateValue;
            var rotateValue;

            var startOffset = (vm.activeIndex * itemWidth) + itemWidth;
            if (vm.activeIndex === index) {
                translateValue = startOffset / (index + 1);
                rotateValue = 0;
            } else {
                if (vm.activeIndex > index) {
                    // prev
                    translateValue = -startOffset + ((index + 1) * itemWidth) + itemWidth;
                    rotateValue = -10;
                } else {
                    // next
                    var diff = index - vm.activeIndex - 1;
                    translateValue = (startOffset / (vm.activeIndex + 1)) + (itemWidth * diff) + itemWidth;
                    rotateValue = 10;
                }
            }

            return "translateX(" + translateValue + "%) rotateY(" + rotateValue + "deg)";
        }

        function resetSelection() {
            articleGalleryContext.articleSelected = undefined;
            articleGalleryContext.hasChanged(articleGalleryContext.source.articleSelection);
        }

        // Key navigation
        $scope.$on("keydown", function(msg, code) {
            if (articleGalleryContext.articleSelected) {
                return;
            }
            if (code === 37) {
                vm.prevSlide();
                $scope.$apply();
                return;
            }
            if (code === 39) {
                vm.nextSlide();
                $scope.$apply();
                return;
            }
        });

        // Functions mapping
        vm.init = init;
        vm.nextSlide = nextSlide;
        vm.prevSlide = prevSlide;
        vm.clickOn = clickOn;
        vm.navigateTo = navigateTo;
        vm.getTransformation = getTransformation;
        vm.resetSelection = resetSelection;
    }

    // dependency injection
    articleSliderController.$inject = ["$scope", "articleService", "articleGalleryContext", "$state"];

    /*
     * Module definition
     */
    var module;

    try {
        module = angular.module("cuartato");
    } catch (err) {
        module = angular.module("cuartato", ["kass-ui", "cuartato-services"]);
    }

    module.controller("articleSliderController", articleSliderController);
})();