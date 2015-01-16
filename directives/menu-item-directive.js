/**
* Defines a menu item.
*/
Application.Directives
    .directive('menuItemDirective', function () {
        'use strict';
        return {
            restrict : 'A',
            replace : true,
            templateUrl : 'templates/menu-item-template.html',
            //TODO: define directive controller.
            link : function(scope, element, attrs) {
            },
        };
    });