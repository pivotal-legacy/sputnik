(function () {
    angular.module("adminControllers").controller("adminSegmentController", ['$scope', 'adminSegmentsResource', 'stravaSegmentResource', 'adminCampaignSegmentsResource', function ($scope, adminSegmentsResource, stravaSegmentResource, adminCampaignSegmentsResource) {
        $scope.segment.name = "Loading";
        stravaSegmentResource.get({segmentId: $scope.segment.remoteid}).$promise.then(setSegmentName);

        $scope.destroy = function () {
            adminSegmentsResource.delete({segmentId: $scope.segment.id}).$promise.then(function () {
                $scope.deleteCallback($scope.deleteCallbackArgument)
            });
        };

        $scope.removeCampaign = function (campaignId) {
            adminCampaignSegmentsResource.delete({segmentId: $scope.segment.id, campaignId: campaignId}).$promise.then(function () {
                $scope.segment.campaigns = $scope.segment.campaigns.filter(function (campaign) {
                    return campaign.id != campaignId;
                });
            });
        };

        $scope.addCampaign = function (campaign) {
            adminCampaignSegmentsResource.save({segmentId: $scope.segment.id, campaignId: campaign.id}).$promise.then(function () {
                $scope.segment.campaigns.push(campaign);
            });
        };

        $scope.containsCampaign = function (campaign) {
            return $scope.segment.campaigns.some(function (c) {
                return c.id === campaign.id;
            });
        };

        function setSegmentName(response) {
            $scope.segment.name = response.name;
        }
    }]);
})();