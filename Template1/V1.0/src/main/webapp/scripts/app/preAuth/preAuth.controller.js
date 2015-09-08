'use strict';

angular.module('hipooApp')
    .controller('PreAuthUIContentController', function ($scope, Principal) {
        Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
        });
        
        $scope.imagePath = '/favicon.ico';

   
    });
