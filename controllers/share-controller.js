/**
 * Manages the share options
 */
Application.Controllers.controller('shareController', ['$scope', '$sce', function ($scope, $sce) {
    'use strict';
    loadIcons();
    $scope.isActive = false;
    $scope.message;
    $scope.renderHtml = function (htmlCode) {
      return $sce.trustAsHtml(htmlCode);
    };
    $scope.activeDrawer = function() {
      $scope.isActive = !$scope.isActive;
      if (!$scope.isActive) {
        $scope.message = '';
        $('.extra-buttons').css('display','none');
      }
    }
    $scope.showMessage = function(type) {
      $('.fb_iframe_widget').css('display','none');
      if (type==='facebook') {
        $scope.message = '<div>Show some love by sharing this on Facebook!</div>';
        $('.extra-buttons, .fb_iframe_widget').css('display','block');
      }
      if (type==='twitter') {
        $scope.message = '<div><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Time%20travel%20is%20possible:%20http%3A%2F%2Ftimetraveltelevision.com">Click here</a> to impress your Twitter followers with your awesome find!</div>';
      }
      if (type==='donate') {
        $scope.message = '<div>Feel guilty for loving this app so much and not paying for it? Never fear: you can buy me a beer!<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="W4W36HRRTZFMG"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form></div>'
        $('.extra-buttons').css('display','none');
      }
      if (type==='github') {
        $scope.message = '<div>This app is open source. Help me develop it and keep it bug-free at <a href="https://github.com/jameson5555/time_travel_television" target="_blank">Ye Olde Github Repo</a>.</div>'
        $('.extra-buttons').css('display','none');
      }
      if (type==='contribute') {
        $scope.message = '<div>Got a sweet idea for a video that belongs here? Shoot an email on over to <a href="mailto:suggestions@timetraveltelevision.com">suggestions@timetraveltelevision.com</a>. Bonus points for a YouTube link and the decade it should go in.</div>'
      }
    }
}]);