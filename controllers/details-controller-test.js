describe('Menu controller', function () {
    'use strict';
    var mockMenuService, mockRouteParams, items, scope, $q, $rootScope;
    beforeEach(function () {

        //Define any underlying mock data.
        items = [{
            "id" : "item_1",
            "name" : "item 1",
            "description" : "item 1 details",
            "timestamp" : "1349539521000"
        }, {
            "id" : "item_2",
            "name" : "item 2",
            "description" : "item 2 details",
            "timestamp" : "1349651343000"
        }];

        mockRouteParams = {
            id: 'item_1'
        };

        //Create mocks before we define our provider values. Using jasnine spy objects allows us to
        //define mocks succinctly.
        mockMenuService = jasmine.createSpyObj('mockMenuService', ['get']);

        //Chain a jasmine "andCallFake" method onto the spy so we can return a mock promise object.
        mockMenuService.get.and.callFake(function () {
            var deferred;
            deferred = $q.defer();
            deferred.resolve(items[0]);
            return deferred.promise;
        });

        //We laod all the module dependancies up front.
        module('application.filters', 'application.services', 'application.controllers', 'application.directives', 'application.constants');

        //Use the angular $provide service to mock any dependancies;
        module(function ($provide) {
            $provide.value('menuService', mockMenuService);
            $provide.value('$routeParams', mockRouteParams);
        });

        //Injecting all of our services in the "beforeEach" section allows us to avoid cluttering out tests.    
        inject(function ($injector, $controller) {
            $q = $injector.get('$q');
            $rootScope = $injector.get('$rootScope');
            scope = $rootScope.$new();
            $controller('detailsController', {$scope: scope});
        });
    });

    afterEach(function () {
        $rootScope.$digest();
    });

    it('should load the item with the passed id', function () {
        scope.$apply();
        expect(scope.item).toEqual(items[0]);
    });
});