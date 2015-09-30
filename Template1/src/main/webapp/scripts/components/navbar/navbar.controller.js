'use strict';

angular.module('hipooApp')
    .controller('NavbarController', function ($scope, $location, $state, Auth, Principal, $mdSidenav, $mdDialog) {
        $scope.isAuthenticated = Principal.isAuthenticated;
        $scope.$state = $state;

        $scope.logout = function () {
            Auth.logout();
            $state.go('home');
        };
                
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
          };
                   
          var originatorEv;
          $scope.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
          };
    });
