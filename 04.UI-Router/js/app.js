var app = angular.module("demo", ["ui.router"]);



app.config(function($stateProvider){
    $stateProvider
        .state('main', {
            url: '/:something',
            templateUrl: 'partials/main.html',
            controller: 'MainController as mainCtrl'
        });

});


app.controller("MainController", function (){
    var self = this;

    self.message = "Hello World!"
});