(function() {
    "use strict";

    function config($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        $httpProvider.defaults.headers.get["If-Modified-Since"] = "Mon, 26 Jul 1997 05:00:00 GMT";
        $httpProvider.defaults.headers.get["Cache-Control"] = "no-cache";
        $httpProvider.defaults.headers.get["Pragma"] = "no-cache";

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        // Routes

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "^/",
                templateUrl: "/page/home"
            })
            .state("collection", {
                url: "^/collection/{gender}",
                templateUrl: "/page/collection/list",
                controller: "collectionPickerController",
                controllerAs: "collectionPicker"
            });
    };

    config.$inject = ["$httpProvider", "$stateProvider", "$urlRouterProvider", "$locationProvider"];
    angular.module("cuartato", ["kass-ui", "ngTouch", "ui.router", "cuartato-services", "ngAnimate"]).config(config);
})();