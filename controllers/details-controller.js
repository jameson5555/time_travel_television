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
    loadIcons();

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
        // console.log('currentVideo: ',currentVideo);
        // console.log('newVideo: ',newVideo);
        
        if (newVideo !== currentVideo) {
          $scope.initialVideo = newVideo;
          player.playVideo();
          // console.log('id is unique', newVideo);
        } //else console.log('id is same ',newVideo);
      }
    }

    menuService.get(id).then(function (item) {
      $scope.item = item;
      // console.log('scope.item is ',$scope.item);
      // console.log("item is ", item);
      if (item.name === '50s') {
        item.videoIds = [
          "b1c3GcQGd5U" // peter gunn
        ];
      }
      if (item.name === '60s') {
        item.videoIds = [
          "Nk3ZN3dSeDk", // beach blanket bingo
          "bBk9-m3wNLc", // 60s commercials (cigarrettes, etc.)
          "TzclE11RNhc", // 60s commercials boys toys
          "XHQ-35uRlfA", // dragnet
          "Qi5BM3nZ2kM", // dick van dyke promo
          "F5zM5FfloSw", // the lucy show - lucy the bean queen
          "A_kO77jPGuU", // beverly hillbillies
          "hRsfKK34SFY", // tardis takes off for first time
          "YN7pCuNtO6Q" // doctor who first intro
        ];
      }
      if (item.name === '70s') {
        item.videoIds = [
          "N8fkjTjM-lE", // funny 70s commercials
          "VbGCM3vgack", // benny hill
          "on2fRhovQP8", // shazam
          "IrwMyQ3_7P8", // the amazing spiderman
          //"OxGMAskCA0w", // streets of san francisco (no longer available due to copyright claim)
          "SyKD4KagqbA", // steve martin standup snl
          "09h9SCp94s8" // doctor who tom baker
        ];
      }
      if (item.name === '80s') {
        item.videoIds = [
          "XBf0yJVMSzI", // mtv first airing
          "q6LWeVkzTTA", // mtv early top 20 countdown
          "sOnqjkJTMaA", // thriller
          "dnq08Krap6g", // 80s commercials vol 1
          "pv5Zvi0OsvE", // 80s commercials vol 2
          "asSgIrIcMZc", // 80s commercials vol 3
          "w2BCG4YZy8Y", // 80s commercials vol 4
          "N6uEMOeDZsA", // want a new drug
          "lAD6Obi7Cag", // want my mtv
          "J-7be88JnJ0", // different strokes
          "Zn5OJGucveg", // madonna crazy for you
          "rSaC-YbSDpo", // madonna borderline
          "idnwh6iDnXA" // where's the beef
        ];
      } if (item.name === '90s') {
        item.videoIds = [
          "acJktomTrT0", // pearl jam unplugged
          "ms61I54CeQA", // creed parody
          "0kYYiRmtMH4", // 90s commercials vol 1
          "qFSAds56rcQ", // 90s commercials vol 2
          "5wdfwh_o6DE", // 90s commercials vol 3
          "Jne9t8sHpUc", // alanis morisette ironic
          "010KyIQjkTk", // kris kross jump
          "esEdC0c3YI4", // only happy when it rains
          "QbZI387PCew", // home improvement
          "cZaglHQOgt8", // outshined live
          "Kr0tTbTbmVA" // summertime by fresh prince
        ];
      }

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

      $scope.fullScreen = function() {
        $('body').toggleClass('zoomed');
      };
    });
    $scope.player = {
      vars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        origin: 'http://timetraveltelevision.com',
        showinfo: 0
      }
    };
}]);