(function () {
    'use strict';
    angular.module('MenuApp')
        .config(RouterConfig);
    RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouterConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.template.html'
            })
            .state('categories', {
                url: '/categories',
                templateUrl: 'src/templates/categories.template.html',
                controller: 'CategoriesController as CC',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/items/{catgshrna}/{catname}',
                templateUrl: 'src/templates/items.template.html',
                controller: 'ItemsController as IC',
                resolve: {
                    items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        console.log(MenuDataService.getItemsForCategories($stateParams.catgshrna));
                        return MenuDataService.getItemsForCategories($stateParams.catgshrna);
                    }]
                }
            });
    }
})()