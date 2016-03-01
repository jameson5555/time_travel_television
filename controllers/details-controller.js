/**
 * Manages the details view scope.
 */
Application.Controllers.controller('detailsController', ['menuService', '$scope', '$routeParams', function (menuService, $scope, $routeParams) {
    'use strict';
    var id;
    var randomVideo;
    var previousVideo;
    var newVideo;
    id = $routeParams.id;
    console.log('id is ',id);

    function getVideoId(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    menuService.get(id).then(function (item) {
        $scope.item =  item;
        randomVideo = getVideoId(item.videoIds);
        $scope.initialVideo = randomVideo;
        $scope.$on('youtube.player.ended', function ($event, player) {
          previousVideo = randomVideo;
          newVideo = getVideoId(item.videoIds);
          while (newVideo === previousVideo) {
            newVideo = getVideoId(item.videoIds);
          }
          $scope.initialVideo = newVideo;
          player.playVideo();
        });
    });
    $scope.player = {
      vars: {
          // autoplay: 1,
          // controls: 0
      }
    };
}]);