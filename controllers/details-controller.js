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

    function getVideoId(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    function getRandomStartPoint(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    menuService.get(id).then(function (item) {
        $scope.item =  item;
        randomVideo = getVideoId(item.videoIds);
        $scope.initialVideo = randomVideo;

        $scope.$on('youtube.player.ready', function($event, player) {
          var videoLength = player.getDuration();
          var startPoint = getRandomStartPoint(0,videoLength);
          //player.seekTo(startPoint);
        });

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
        //autoplay: 1,
        controls: 0,
        modestbranding: 1,
        origin: 'http://jamesonmacarthur.com',
        showinfo: 0
      }
    };
}]);