(function() {
    "use strict";

    function cartService($http) {

        function addToCart(cartItem) {
            return $http.post("/cart", cartItem);
        }

        return {
            addToCart: addToCart
        };
    }

    cartService.$inject = ["$http"];

    /*
     * Module definition
     */
    var module;

    try {
        module = angular.module("cuartato-services");
    } catch (err) {
        module = angular.module("cuartato-services", []);
    }
    module.factory("cartService", cartService);
})();