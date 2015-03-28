var app = angular.module("demo", ["ui.router"]);



app.config(function($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'partials/main.html',
            controller: 'MainController as mainCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partials/about.html',
            controller: 'MainController as mainCtrl'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'partials/contact.html',
            controller: 'MainController as mainCtrl'
        });
});


app.controller("MainController", function (){
    var self = this;

    self.message = "Hello World!"
});