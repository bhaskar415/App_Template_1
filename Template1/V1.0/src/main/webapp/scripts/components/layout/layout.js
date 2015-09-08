'use strict';

angular.module('hipooApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('layout', {
                parent: 'site',
                url: '/',
                data: {
                    roles: []
                },
                views: {
                    'layout@': {
                        templateUrl: 'scripts/components/layout/layout.html',
                        controller: 'LayoutController'
                    },
                    'content@layout': {
                        templateUrl: 'scripts/app/main/main.html',
                        controller: 'MainController'
                    },
                    'navbar@layout': {
                    templateUrl: 'scripts/components/navbar/navbar.html',
                    controller: 'NavbarController'
	                },
	                'preAuth_content@layout': {
	                  	templateUrl: 'scripts/app/preAuth/preAuthUIContent.html',
	                    controller: 'PreAuthUIContentController'
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
