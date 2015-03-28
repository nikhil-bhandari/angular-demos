var app = angular.module("demo", []);

app.controller("DemoController", function ($scope){
    $scope.message = "Demo";
});

app.controller("Demo2Controller", function ($scope){
    $scope.message = "Demo 2";
});

app.controller("Demo3Controller", function ($scope){
    $scope.message = "Demo 3";
});

app.controller("Demo4Controller", function ($scope){
    $scope.message = "Demo 4";
});