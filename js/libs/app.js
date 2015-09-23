(function(){
    /* Main AngularJS Web Application */
    var app = angular.module('BhargavApp', ['ngRoute', 'ngAnimate']);

    /* Configure the Routes */
    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        // Home
        .when("/", {
            title: "Bhargav Kondapalli - Home",
            templateUrl: "partials/home.html"
        })
        // Pages
        .when("/portfolio", {
            title: "Bhargav Kondapalli - Portfolio",
            templateUrl: "partials/portfolio.html"
        })   
        .when("/contact", {
            title: "Bhargav Kondapalli -Contact",
            templateUrl: "partials/contact.html"
        })  
        // else 404
        .otherwise("/404", {
            templateUrl: "partials/404.html"
        });
    }]);

    app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        // test for current route
        if(current.$$route) {
            // Set current page title 
            $rootScope.title = current.$$route.title;
        }
    });
}]);

app.controller("HeaderController", function($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };        
});

app.controller("PortfolioController", function($scope, $http)
{    
    $scope.items = [];
    $http.get('js/libs/info.json').success (function(data){
    $scope.items = data.info;

    $scope.totalDisplayed = 5;

    $scope.loadMore = function () {
      $scope.totalDisplayed += 5;  
    };  

  }); 
});

})();