angular.module('AngularRails')
    .controller('ProductCtrl', function ($scope, $http) {
        $scope.newProductModel = {};
        $scope.submitProductModel = function() {
        	$http.post('/api/products', {
        		name: $scope.newProductModel.productname,
        		price: $scope.newProductModel.productprice,
                available: $scope.newProductModel.available,
                authenticity_token: $scope.newProductModel.authToken
        	}).success(function(data, status, headers, config) {
                
        	});
        };
    });