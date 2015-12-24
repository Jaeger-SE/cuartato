(function () {
    "use strict";

    /**
     * Controller
     */
    function highlightSliderController() {
        var vm = this;

        // Fields
        vm.items = [
            {
                src: "/img/banner.jpg",
                title: "coucou"
            },
            {
                src: "/img/banner2.jpg",
                title: "blurp"
            },
            {
                src: "/img/banner.jpg",
                title: "pikachu"
            },
            {
                src: "/img/banner2.jpg",
                title: "tordesilla"
            }
        ];

        // Functions implementation

        // Functions mapping
    }

    // dependency injection
    highlightSliderController.$inject = [];

    /*
     * Module definition
     */
    var module;

    try {
        module = angular.module("cuartato");
    } catch (err) {
        module = angular.module("cuartato", ["kass-ui"]);
    }

    module.controller("highlightSliderController", highlightSliderController);
})();