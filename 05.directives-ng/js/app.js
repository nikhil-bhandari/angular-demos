var app = angular.module("demo", [])

// Inline Array Annotation
app.controller("DemoController", ["$scope", function (){
    var self = this;

    self.array = [1,"Hello",3,"World",5];
    self.obj = {name: "Nikhil", country: "India"}
    self.message = "Inside Controller 1";
    self.alertMessage = function(){
        alert(self.message);
    };
    console.log(self.message);
}]);
