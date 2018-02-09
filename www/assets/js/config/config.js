angular.module('config', ['ngMaterial', 'ui.router', 'google.places', 'ngMessages'])

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    // Configuração de cor
    var greenApp = $mdThemingProvider.extendPalette('blue', {
        '500': '#72d572',
        'contrastDefaultColor': 'light'
    });
    $mdThemingProvider.definePalette('blueApp', greenApp);
    $mdThemingProvider.theme('default').primaryPalette('blueApp');

    $stateProvider
        .state('inicio', {
            url: '/inicio',
            views: {
                'content@': {
                    templateUrl: 'modulos/home/index.html',
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('user', {
            url: '/user',
            views: {
                'content@': {
                    templateUrl: 'modulos/usuario/index.html',
                    controller: 'userController'
                }
            }
        })
        .state('meusPets', {
            url: '/meus-pets',
            views: {
                'content@': {
                    templateUrl: 'modulos/meusPets/index.html',
                    controller: 'meusPetsController'
                }
            }
        })


        .state('meusPets.detalhesAdocao', {
            url: '/detalhes-adocao/:idPost',
            views: {
                'content@': {
                    templateUrl: 'modulos/meusPets/templates/detalhesAdocao.html',
                    controller: 'meusPetsController'
                }
            }
        })

    ;
    // if none of the above states are matched, use this as the fallback
    // $urlRouterProvider.otherwise('inicio');
    $urlRouterProvider.otherwise('user');
});