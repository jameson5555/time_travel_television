/**
 * Manages the menu scope
 */
Application.Controllers.controller('menuController', ['menuService', '$scope', '$location', function (menuService, $scope, $location) {
    'use strict';
    $scope.location = $location.path().split('/')[1];
    $scope.states = {};
    $scope.states.activeItem = $scope.location;

    menuService.get().then(function (items) {
        $scope.items = items;
        
        // if (!$scope.states.activeItem) {
        //   var welcome = $('<div>', {
        //     'text': 'Choose a decade!',
        //     'class': 'welcome'
        //   }).insertAfter('.decades');
        // }
    });
}]);