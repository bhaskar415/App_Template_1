'use strict';

angular.module('hipooApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('settings', {
                parent: 'account',
                url: '/settings',
                data: {
                    roles: ['ROLE_USER'],
                    pageTitle: 'global.menu.account.settings'
                },
                views: {
                    'content@layout': {
                        templateUrl: 'scripts/app/account/settings/settings.html',
                        controller: 'SettingsController'
                    },
                    'passwordPage@settings': {
                        templateUrl: 'scripts/app/account/password/password.html',
                        controller: 'PasswordController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('settings');
                        $translatePartialLoader.addPart('password');
                        return $translate.refresh();
                    }]
                }
            });
    });
