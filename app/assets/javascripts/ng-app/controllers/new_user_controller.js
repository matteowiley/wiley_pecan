angular.module('AngularRails')
    .controller('NewCtrl', function ($scope, $http) {
        $scope.newUserModel = {};
        $scope.submitModel = function() {
        	$http.post('/api/users', {
        		firstname: $scope.newUserModel.firstName,
        		lastname: $scope.newUserModel.lastName,
                email: $scope.newUserModel.email,
                authenticity_token: $scope.newUserModel.authToken
        	}).success(function(data, status, headers, config) {
                
        	});
        };
    });
 