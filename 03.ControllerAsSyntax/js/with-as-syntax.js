var app = angular.module("demo", [])

app.controller("DemoController", function ($rootScope){
    var self = this;
    self.message = "Demo";
    console.log($rootScope);
});
