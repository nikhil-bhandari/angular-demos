//Available shortcut methods

$http.get
$http.head
$http.post
$http.put
$http.delete
$http.jsonp
$http.patch





















$http.get('http://localhost:9000/api/todos', {
        params: {}
    })
    .success(function (data, status) {

    });
var req = {
    method: 'POST',
    url: 'http://localhost:9000/api/todos',
    headers: {
        'Content-Type': undefined
    },
    data: {test: 'test'}
}








$http(req)
    .success(function () {

    })
    .error(function () {

    });

var app = angular.module('demo', []);




