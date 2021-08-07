(function () {
    'use strict';
    angular.module('data')
    .component('items',{
        templateUrl: 'src/templates/items.components.html',
        bindings: {
            category: '<',
            name: '<'
        }
    });
})()