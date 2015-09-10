'use strict';

angular.module('hipooApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
