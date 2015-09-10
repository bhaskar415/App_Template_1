'use strict';

angular.module('hipooApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'layout',
                url: '/main',
                data: {
                    roles: []
                },
                views: {
                    'content@layout': {
                        templateUrl: 'scripts/app/main/main.html',
                        controller: 'MainController'
                    }            
                },
                resolve: {
                    mainTranslatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('main');
                        return $translate.refresh();
                    }]
                }
            });
    });
