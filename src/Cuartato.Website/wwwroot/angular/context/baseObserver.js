(function() {
    "use strict";

    function sharedContext() {
        var observerCallbacks = [];

        function registerObserverCallback(dependencySource, callback) {
            if (!observerCallbacks[dependencySource]) {
                observerCallbacks[dependencySource] = [];
            }
            observerCallbacks[dependencySource].push(callback);
        }

        function notifyObservers(dependencySourceId) {
            if (!dependencySourceId) {
                // Init
                angular.forEach(observerCallbacks, function(callbacksArray) {
                    angular.forEach(callbacksArray, function(callback) {
                        // source, isInit
                        callback(dependencySourceId, true);
                    });
                });
            } else {
                angular.forEach(observerCallbacks[dependencySourceId], function(callback) {
                    // source, isInit
                    callback(dependencySourceId, false);
                });
            }
        }

        function modelHasChanged(source) {
            notifyObservers(source);
        }

        return {
            register: registerObserverCallback,
            notify: notifyObservers,
            hasChanged: modelHasChanged
        };
    }

    var module;

    try {
        module = angular.module("kass-ui");
    } catch (err) {
        module = angular.module("kass-ui", []);
    }
    module.factory("sharedContext", sharedContext);
})();