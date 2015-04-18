angular.module('demo', []).
filter('reverse', function() {
    return function(input, uppercase) {
        var reversed = input.split("").reverse()
        return uppercase ? reversed.toUpperCase(): reversed;
    }
});