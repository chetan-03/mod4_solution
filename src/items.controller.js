(function () {
    'use strict';
    angular.module('data')
        .controller('ItemsController', ItemsController);
    ItemsController.$inject = ['items', '$stateParams'];
    function ItemsController(items, $stateParams) {
        var IC = this;
        IC.items = items;
        IC.name = $stateParams.catname;
    }
})()