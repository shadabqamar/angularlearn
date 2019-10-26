angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://ergast.com/api/f1/2004/1/results.json').
        then(function(response) {
            $scope.greeting = response.data;
        });
});