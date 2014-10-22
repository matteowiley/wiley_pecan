angular.module('AngularRails')
    .controller('EditCtrl', function ($scope, $http) {
        $scope.EditProductModel = {};

        $scope.getProductModel = function() {
            //TODO: Find a way to get the product_id of the product you want
            //Fill out a form with all the attributes
            //Get product as JSON from the backend api
            //replace JSON attributes as necessary
            //http.put to update back to backend api

            $http.get('/api/products/' + $scope.product_id, {

            }).sucess(function(product, status, headers,config){
                
            })
        	
        };

        $scope.updateProductModel = function (product){
            $http.put('/api/products/' + $scope.product_id, {
                    name: product.name,
                    price: product.price,
                    available: product.available,
                    authenticity_token: product.authToken
                }).success(function(data, status, headers, config) {
                    
                });
        };
    });