(function () {
    'use strict';
    angular.module('data')
        .controller('CategoriesController', CategoriesController);
    CategoriesController.$inject = ['categories','MenuDataService'];
    function CategoriesController(categories,MenuDataService) {
        var CC = this;
        CC.item = "Menu app";
        CC.categories = categories;
        CC.getItemById = (id) => {
            MenuDataService.getItemsForCategories(id);
        };
    }
})();