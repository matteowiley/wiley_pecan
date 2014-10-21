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
            .when('/new', {
                templateUrl: 'new.html',
                controller: 'NewCtrl'
            })
            // .when('/user', {
            //     templateUrl: 'user.html',
            //     controller: 'UserCtrl'
            // });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });
  