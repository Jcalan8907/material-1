(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['$http', '$mdSidenav'];
    function mainController($http, $mdSidenav) {
        var vm = this;
        vm.message = "Material tutorial"
        vm.openLeftMenu = function () {
            $mdSidenav('left').toggle();
            console.log('clicked');
        }

        $http({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts",
            headers: {
                accept: "application/json;odata=verbose"
            }
        })
            .then(function (results) {
                vm.posts = results.data;
            });

        vm.querySearch = function (searchText) {
            if (searchText) {
                vm.filteredPosts = vm.posts.filter(function (item) {
                    if (item.title.indexOf(searchText) != -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                })
                return vm.filteredPosts
            }
            else{
                return vm.posts;
            }
        }

        vm.selectedItemChange = function (newItem) {

        }
    }
})();