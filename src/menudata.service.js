(function () {
    'use strick';
    angular.module('data')
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com')
        .service('MenuDataService', MenuDataService);
    MenuDataService.$inject = ['ApiBasePath', '$http'];
    function MenuDataService(ApiBasePath, $http) {
        var service = this;
        service.getAllCategories = function () {
            var response = $http({
                method: 'GET',
                url: (ApiBasePath + '/categories.json')
            });
            return response.then(function (result) {
                console.log(result.data);
                return result.data;
            }).catch((error) => {
                console.log("error from service" + error);

            }).finally(() => {
                console.log("finally of all cats");
            });
        };
        service.getItemsForCategories = function (shortname) {
            var response = $http({
                method: 'GET',
                url: (`${ApiBasePath}/menu_items.json?category=${shortname}`)
            });
            return response.then(function (result) {
                console.log(result.data.menu_items);
                return result.data.menu_items;
            }).catch((error) => {
                console.log("error from service" + error);

            }).finally(() => {
                console.log("finally of itemsfor");
            });
        };
    }
})();