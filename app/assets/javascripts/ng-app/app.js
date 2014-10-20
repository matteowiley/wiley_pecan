angular
    .module('AngularRails', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home.html',
                controller: 'HomeCtrl'
            })
            .when('/hello', {
                templateUrl: 'hello.html',
                controller: 'HelloCtrl'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });