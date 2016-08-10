(function(){

    var app = angular.module("myApp", ["ngRoute"]);
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "Views/index.html"
            })
            .when("/home", {
                templateUrl : "Views/index.html"
            })
            .when("/join", {
                templateUrl : "Views/join.html"
            })
            .when("/signin", {
                templateUrl: "Views/signin.html"
            })
            .when("/join", {
                templateUrl: "Views/join.html"
            })
            .when("/signup/staff", {
                templateUrl: "Views/staffSignup.html"
            })
            .when("/signup/student", {
                templateUrl: "Views/studentSignup.html"
            });
    //        .otherwise({
    //            templateUrl : "../Views/Index_view.html"
    //        });
        $locationProvider.html5Mode(true);
    });


})();