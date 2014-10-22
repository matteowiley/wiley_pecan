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
            .when('/product/new', {
                templateUrl: 'product.html',
                controller: 'ProductCtrl'
            })
            .when('/new', {
                templateUrl: 'new.html',
                controller: 'NewCtrl'
            })
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
  