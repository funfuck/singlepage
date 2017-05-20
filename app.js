var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider

    .otherwise({redirectTo : '/'})

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        .when('/product', {
            templateUrl: 'pages/view.html',
            controller: 'productController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
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
app.controller('aboutController', function($scope) {});
app.controller('contactController', function($scope) {});