var app = angular.module('demo', ['ngResource']);

app.factory('TodoApiService', function ($resource) {
    return $resource('/api/todo/:id', {
            id: '@_id'
        },
        {
            list: {
                method: 'GET',
                isArray: true
            },
            show: {
                method: 'GET'
            },
            create: {
                method: 'POST'
            },
            update: {
                method: 'PUT'
            },
            delete: {
                method: 'DELETE'
            }

        });
});
