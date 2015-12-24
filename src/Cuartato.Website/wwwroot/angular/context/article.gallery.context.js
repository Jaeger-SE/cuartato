(function() {
    "use strict";

    function articleGalleryContext(sharedContext) {
        return {
            articleSelected: [],
            register: sharedContext.register,
            notify: sharedContext.notify,
            hasChanged: sharedContext.hasChanged,
            source: {
                articleSelection: 0
            }
        };
    }

    articleGalleryContext.$inject = ["sharedContext"];

    var module;

    try {
        module = angular.module("cuartato");
    } catch (err) {
        module = angular.module("cuartato", ["kass-ui", "cuartato-services"]);
    }
    module.factory("articleGalleryContext", articleGalleryContext);
})();