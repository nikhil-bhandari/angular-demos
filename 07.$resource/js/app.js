var app = angular.module('demo', ['ngResource']);

app.factory('TodoApiService', function ($resource) {
        return $resource('/v1/api/todo/:action/:id', {
                id: '@_id'
            },
            {
                get: {
                    method: 'GET',
                    params: {action: "show"}
                },
                update: {
                    method: 'PUT'
                },
                list: {
                    method: 'GET'
                },
                delete: {

                }

            });
    });
