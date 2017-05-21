var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider, $locationProvider) {

    // สำคัญกับการทำเรื่อง social share
    $locationProvider.html5Mode(true);

    $routeProvider

    .otherwise({redirectTo : '/'})

        // route ของหน้า home
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route ของหน้า view product
        .when('/product', {
            templateUrl: 'pages/view.html',
            controller: 'productController'
        })

        // route ของหน้า about
        .when('/about', {
            templateUrl : 'pages/about.html',
        })

        // route ของหน้า contact
        .when('/contact', {
            templateUrl : 'pages/contact.html',
        });
    });

app.controller('mainController', function($scope, $location, $http) {
    var successCallback = function(response) { $scope.products = response.data; }
    var errorCallback = function(response) { console.log("fail : ", response); }
    $http({method: "GET", url: "http://localhost:8080/product"}).then(successCallback, errorCallback);
});
app.controller('productController', function($scope, $location, $http, $location) {
    var searchObj = $location.search();
    var successCallback = function(response) { $scope.product = response.data; }
    var errorCallback = function(response) {console.log("fail : ", response);}
    $http({method: "GET", url: "http://localhost:8080/product/"+ searchObj.id}).then(successCallback, errorCallback);
});