angular.module('AngularRails')
    .controller('ProductCtrl', function ($scope, $http) {
        $scope.newProductModel = {};
        $scope.createProduct = function() {
        	$http.post('/api/products', {
        		name: $scope.newProductModel.productname,
        		price: $scope.newProductModel.productprice,
                description: $scope.newProductModel.productdescription,
                available: $scope.newProductModel.available,
                authenticity_token: $scope.newProductModel.authToken
        	}).success(function(data, status, headers, config) {});

        };

        $scope.indexProduct = function() {
            $http.get('/api/products').success(function(products) {
                $scope.products = products
            });
        };
        $scope.indexProduct();
        
        $scope.editProduct = function(product) {
            product_id = product.id;
            $http.put('/api/products/' + product_id, {
                name: product.newname,
                price: product.newprice,
                description: product.newdescription,
                available: product.newavailable,
                authenticity_token: product.authToken
            }).success(function(data, status, headers, config) {
                product.name = product.newname;
                product.price = product.newprice;
                product.description = product.newdescription;
                product.available = product.available;
                console.log(data);
            }).error(function(err) {
                console.log(err);
            });
        }

    });