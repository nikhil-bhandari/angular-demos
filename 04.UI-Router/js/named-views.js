var app = angular.module("demo", ["ui.router"]);



app.config(function($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('main', {
            url: '/',
            views:{
                "": {
                    template: "unnamed view"
                },
                "left":{
                    template: "left"
                },
                "right":{
                    template: "right"
                },
                "top":{
                    template: "top"
                }
            }
        });


});


app.controller("MainController", function (){
    var self = this;
    
    self.message = "Hello World!"
});