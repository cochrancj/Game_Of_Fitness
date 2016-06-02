var GameOfFitnessApp = angular.module("Game-Of-Fitness-App", [] );

    GameOfFitnessApp.controller("WorkoutsController", ["$scope", "$http", function($scope, $http){

    $http.get('/api/cards').then(function(response){
      $scope.cards = response.data.cards;
      console.log("cards!");
      $scope.random = function() {
        return 0.5 - Math.random();
      }
    })

// This piece of code is supposed to grab the clicked on card's mana number, grab the logged-in users id number, mush them together, and add them for storage in the user's profile. It does not work. 
    $scope.addToScore = function(mana, userid, cardid){
        $http.put('/users/'+userid, [mana, cardid])
        console.log(card.mana, userid);
    }


// This piece of code toggles the class of all cards when a single card is clicked - and doesn't prevent all cards from then being shuffled.
    $scope.toggleClassName = function($event, className) {
        className = className || 'isactive';
        $($event.target).toggleClass(className);
    };






}])
