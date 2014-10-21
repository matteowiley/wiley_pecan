angular.module('AngularRails')
    .controller('NewCtrl', function ($scope, $http) {
        $scope.newUserModel = {};
        $scope.submitModel = function() {
        	$http.post('/user', {
        		firstName: $scope.newUserModel.firstName,
        		lastName: $scope.newUserModel.lastName,
                email: $scope.newUserModel.email,
                authenticity_token: $scope.newUserModel.authToken
        	}).success(function(data, status, headers, config) {
                
        	});
        };
    });