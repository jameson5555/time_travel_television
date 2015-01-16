/**
 * Manages the menu scope
 */
Application.Controllers.controller('menuController', ['menuService', '$scope', function (menuService, $scope) {
    'use strict';

    menuService.get().then(function (items) {
        $scope.items = items;
    });
}]);