(function() {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController);

    mainController.$inject = ['$http','$mdSidenav'];
    function mainController($http, $mdSidenav) {
        var vm = this;
        vm.message = "Material tutorial"
        vm.openLeftMenu = function(){
            $mdSidenav('left').toggle();
            console.log('clicked');
        }
   
    }
})();