var app = angular.module("demo", ["ui.router"]);



app.config(function($stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'partials/main.html',
            controller: 'MainController as mainCtrl'
        })
        .state('main.list', {
            url: '/list',
            template: 'list <div ui-view=""></div>'
        })
        .state('main.list.of', {
            url: '/of',
            template: 'of <div ui-view=""></div>'
        })
        .state('main.list.of.something', {
            url: '/something',
            template: 'something <div ui-view=""></div>'
        });


});


app.controller("MainController", function (){
    var self = this;

    self.message = "Hello World!"
});