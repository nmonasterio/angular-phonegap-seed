angular.module('App.controllers', [])
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.status = "It still works!";
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "Also totally works!";
    }]);
