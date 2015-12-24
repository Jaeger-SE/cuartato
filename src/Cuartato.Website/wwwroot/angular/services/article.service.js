(function() {
    "use strict";

    function articleService($http) {
        function getArticles() {
            return $http.get("/article");
        }

        function getArticle(articleUid) {
            return $http.get("/article/" + articleUid);
        }

        return {
            getArticles: getArticles,
            getArticle: getArticle
        };
    }

    articleService.$inject = ["$http"];

    /*
     * Module definition
     */
    var module;

    try {
        module = angular.module("cuartato-services");
    } catch (err) {
        module = angular.module("cuartato-services", []);
    }
    module.factory("articleService", articleService);
})();