(function () {
    angular.module("sputnikDirectives").directive("sputnikSegmentEfforts", function () {
        return {
            templateUrl: 'resources/partials/segmentEfforts.html',
            restrict: 'E',
            scope: {
                segmentEfforts: "=",
                activity: "="
            },
            controller: "segmentEffortsController"
        }
    });
})();