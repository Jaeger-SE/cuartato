(function() {
    "use strict";

    /**
     * Modal controller defintion
     */
    function modalController() {
        var vm = this;

        // Fields
        vm.isOpened = false;

        // Functions implementation
        function open() {
            vm.isOpened = true;
        }

        function close() {
            vm.isOpened = false;
            vm.onClose();
        }

        // Functions mapping
        vm.openModal = open;
        vm.close = close;
    }

    modalController.$inject = [];

    /**    
    * Directive definition
     */
    function modalDirective() {
        return {
            restrict: "A",
            scope: {
                contentPartialUrl: "=",
                openModal: "=",
                onClose: "="
            },
            template: "<div class=\"modal-container\" data-ng-if=\"modal.isOpened\" data-ng-class=\"{'modal-visible': modal.isAnimateStart}\">" +
                "   <div class=\"modal-overlay\" data-ng-click=\"modal.close()\"></div>" +
                "   <div class=\"modal-wrapper\">" +
                "       <button class=\"close-btn\" data-ng-click=\"modal.close()\">" +
                "           <i class=\"fa fa-times\"></i>" +
                "       </button>" +
                "       <ng-include src=\"modal.contentPartialUrl\"></ng-include>" +
                "   </div>" +
                "</div>",
            transclude: true,
            bindToController: true,
            controller: modalController,
            controllerAs: "modal"
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

    module.directive("modal", modalDirective);
})();