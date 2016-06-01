var GameOfFitnessApp = angular.module("Game-Of-Fitness-App", [] );

    GameOfFitnessApp.controller("WorkoutsController", ["$scope", "$http", function($scope, $http){
    //
    // $scope.newWorkouts = {
    //   url: " ",
    //   mana: " ",
    //   group: " "
    // };

    $http.get('/api/cards').then(function(response){
      $scope.cards = response.data.cards;
      console.log("cards!");
    })

    // $scope.newWorkouts [];
    //
    // var newWorkout = {
    //
    // }


    // <div ng-controller="Workouts">
    //   <p ng-repeat="i in list|orderBy:random">{{i}}</p>
    // </div>

    function workouts($scope) {
      $scope.list = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
      $scope.random = function() {
        return 0.5 - Math.random();
      }
    }

    //
    // <div ng-app="" ng-controller="Ctrl">
    //     <button ng-click="shuffle(cards)">shuffle</button>
    //    <div ng-repeat="card in cards">
    //        {{card}}
    //     </div>
    // </div>


    function Ctrl($scope) {
        $scope.cards = [1,2,3,4,5,6,7,8,9]

        //generic shuffling function
        $scope.shuffle = function(card){
            for(var j, x, i = card.length; i; j = Math.floor(Math.random() * i), x = card[--i], card[i] = card[j], card[j] = x);
            return card;
        };
    };





//
// [
//     url: "1.png",
//     url: "2.png",
//     url: "3.png",
//     url: "4.png",
//     url: "5.png",
//     url: "6.png",
//     url: "7.png",
//     url: "8.png",
//     url: "9.png",
//     url: "10.png",
//     url: "11.png",
//     url: "12.png",
//     url: "13.png",
//     url: "14.png",
//     url: "15.png",
//     url: "16.png",
//     url: "17.png",
//     url: "18.png",
//     url: "19.png",
//     url: "20.png",
//     url: "21.png",
//     url: "22.png",
//     url: "23.png",
//     url: "24.png",
//     url: "25.png",
//     url: "26.png",
//     url: "27.png",
//     url: "28.png",
//     url: "29.png",
//     url: "30.png",
//     url: "31.png",
//     url: "32.png",
//     url: "33.png",
//     url: "34.png",
//     url: "35.png",
//     url: "36.png",
//     url: "37.png",
//
// ]

}])
