'use strict';

angular.module('hipooApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


