(function() {
    "use strict";

    /**
     * Controller
     */
    function collectionPickerController($stateParams, $state) {
        var vm = this;

        vm.gender = $stateParams.gender;

        // Fields

        // Functions implementation

        // Functions mapping
    }

    // dependency injection
    collectionPickerController.$inject = ["$stateParams", "$state"];

    /*
     * Module definition
     */
    var module;

    try {
        module = angular.module("cuartato");
    } catch (err) {
        module = angular.module("cuartato", ["kass-ui", "cuartato-services"]);
    }

    module.controller("collectionPickerController", collectionPickerController);
})();