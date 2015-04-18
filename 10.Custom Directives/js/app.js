var app = angular.module("demo", []);

app.directive('randomColor', function () {
    return {
        restrict: "EAC",
        link: function (scope, element) {
            var colors = ['red', 'green', 'orange','yellow'];
            element.css('background-color',
                colors[Math.floor((Math.random() * 3) + 1)]);
        }
    }
});


/*


 scope:{
 something:"~varName" // @ = &
 },
 transclude: true,
 template: "",
 templateUrl:"",
 controller: function(){

 },
 controllerAs: 'SomeName'


 */