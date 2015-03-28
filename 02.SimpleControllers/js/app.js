var app = angular.module("demo", [])

app.controller("DemoController", function ($scope){
    $scope.message = "World"
});


// Inline Array Annotation

app.controller("Demo1Controller", ["$scope", function ($scope){
    $scope.message = "Inside Controller 1";
    console.log($scope.message);
}]);


//$inject Property Annotation

var Demo2Controller = function($scope) {
    $scope.message = "Inside Controller 2";

    console.log($scope.message);
};
Demo2Controller.$inject = ['$scope'];
app.controller('Demo2Controller', Demo2Controller);

//Implicit Annotation
app.controller("Demo3Controller", function (){
    $scope.message = "Inside Controller 3";

    console.log($scope.message);
});
