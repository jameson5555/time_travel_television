/**
 * Manages the details view scope.
 */
Application.Controllers.controller('detailsController', ['menuService', '$scope', '$routeParams', function (menuService, $scope, $routeParams) {
    'use strict';
    var id;
    id = $routeParams.id;
    menuService.get(id).then(function (item) {
        $scope.item =  item;
    });
}]);