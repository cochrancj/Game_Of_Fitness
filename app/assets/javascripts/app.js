var GameOfFitnessApp = angular.module("Game-Of-Fitness-App", [] );

    GameOfFitnessApp.controller("WorkoutsController", ["$scope", "$http", function($scope, $http){

    $http.get('/api/cards').then(function(response){
      $scope.cards = response.data.cards;
      console.log("cards!");
      $scope.random = function() {
        return 0.5 - Math.random();
      }
    })

    $scope.toggleClass = function($event, className) {
        className = className || 'is-open';
        $($event.target).toggleClass(className);
    };


}])
