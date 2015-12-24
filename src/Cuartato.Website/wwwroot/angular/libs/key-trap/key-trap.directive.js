(function() {
    "use strict";

    /**
    * Directive definition
     */

    function keyTrap() {
        function link(scope, elem) {
            elem.bind("keydown", function(event) {
                scope.$broadcast("keydown", event.keyCode);
            });
        }

        return {
            restrict: "A",
            link: link
        };

    }

    /*
     * Module definition
     */
    var module;

    try {
        module = angular.module("kass-ui");
    } catch (err) {
        module = angular.module("kass-ui", []);
    }

    module.directive("keyTrap", keyTrap);
})();