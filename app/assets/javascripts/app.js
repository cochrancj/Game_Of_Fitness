// Sets Angular module up
var GameOfFitnessApp = angular.module("Game-Of-Fitness-App", [] );
// Sets the controller
    GameOfFitnessApp.controller("WorkoutsController", ["$scope", "$http", function($scope, $http){
// Gets cards from the API
    $http.get('/api/cards').then(function(response){
      $scope.cards = response.data.cards;
    //   console.log("cards!");
    })
// Shuffles cards
    $scope.shuffle = function() {
        $scope.cards.sort(function(){
            return 0.5 - Math.random();
        })
    }
// Grabs the clicked on cards' mana number, grabs the logged-in users' id number, mushes them together, and adds them for storage in the user's profile.
    $scope.addToScore = function(mana, cardid){
        $http.get('/users/current_user').then(function(response){
            var id = response.data[0].id;
            var config ={
                mana: mana,
                cardid: cardid
            }
            var userMana = response.data[0].mana
            // console.log(id);
            // console.log(config);
            // console.log(userMana);
        $http.put('/users/'+id, config).then(function(response){
                //  console.log(mana, cardid);
        })
        })
    }
// Toggle function for applying active class (completed cards)
    $scope.toggleClassName = function($event, className) {
        className = className || 'isactive';
        $($event.target).toggleClass(className);
    };
// Pseudocode for loot generation function - brain. broken.
    // $scope.generateLoot = function(){
    //     var loot = [];
    //     if $scope.cards.css(className == 'isactive'){
    //         return loot
    //     }
    // }


}]) //End of line. 
