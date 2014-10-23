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
            .when('/users/new', {
                templateUrl: 'new.html',
                controller: 'NewCtrl'
            })
            .when('/product/edit', {
                templateUrl: 'edit.html',
                controller: 'ProductCtrl'
            })
            .when('/products', {
                templateUrl: 'products.html',
                controller: 'ProductCtrl'
            })
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
  