/**
 * Manages the details view scope.
 */
Application.Controllers.controller('detailsController', ['menuService', '$scope', '$routeParams', function (menuService, $scope, $routeParams) {
    'use strict';
    var id;
    var randomVideo;
    var previousVideo;
    var newVideo;
    var firstTime = true;
    id = $routeParams.id;

    function getVideoId(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    function getRandomStartPoint(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function changeChannel(currentVideo, item, player) {
      newVideo = currentVideo;
      while (newVideo === currentVideo) {
        newVideo = getVideoId(item.videoIds);
        console.log('currentVideo: ',currentVideo);
        console.log('newVideo: ',newVideo);
        
        if (newVideo !== currentVideo) {
          $scope.initialVideo = newVideo;
          player.playVideo();
          console.log('id is unique', newVideo);
        } else console.log('id is same ',newVideo);
      }
    }
    $scope.playAnother = function(player) {
      player.playVideo();
    }

    menuService.get(id).then(function (item) {
      $scope.item =  item;
      randomVideo = getVideoId(item.videoIds);
      $scope.initialVideo = randomVideo;

      $scope.$on('youtube.player.ready', function($event, player) {
        if (firstTime) {
          var videoLength = player.getDuration();
          var startPoint = getRandomStartPoint(0,videoLength);
          player.seekTo(startPoint);
          firstTime = false;
        }
      });

      $scope.$on('youtube.player.ended', function ($event, player) {
        changeChannel(randomVideo, item, player);
      });
    });
    $scope.player = {
      vars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        origin: 'http://jamesonmacarthur.com',
        showinfo: 0
      }
    };
}]);