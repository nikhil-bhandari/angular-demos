var app = angular.module("demo", ["ui.router"]);



app.config(function($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('main', {
            url: '/',
            template: '<a ng-click="mainCtrl.showParams()">Show params</a>',
            controller: 'MainController as mainCtrl'
        })
        .state('test', {
            url: '/:id/:value',
            template: '<a ng-click="mainCtrl.showParams()">Show params</a>',
            controller: 'MainController as mainCtrl'
        });

});


app.controller("MainController", function ($stateParams){
    var self = this;
    self.showParams = function(){
        console.log($stateParams);
    };
    self.message = "Hello World!"
});