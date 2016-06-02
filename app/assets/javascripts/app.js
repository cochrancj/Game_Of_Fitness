var GameOfFitnessApp = angular.module("Game-Of-Fitness-App", [] );

    GameOfFitnessApp.controller("WorkoutsController", ["$scope", "$http", function($scope, $http){

    $http.get('/api/cards').then(function(response){
      $scope.cards = response.data.cards;
      console.log("cards!");

    })

    $scope.shuffle = function() {
        $scope.cards.sort(function(){
                return 0.5 - Math.random();
                })

    }

// This piece of code is supposed to grab the clicked on card's mana number, grab the logged-in users id number, mush them together, and add them for storage in the user's profile. It does not work.
    $scope.addToScore = function(mana, cardid){
        $http.post('/users/current_user').then(function(response){
            var id = response.data;

            $http.put('/users/'+id, [mana, cardid])
            console.log(mana, cardid);
            // couldnt find user WITHOUT ID. Pre this put request; an object with just the ID was returned.
            // research http standard syntax - want to send in an object type: data, json shit send in the body of the request; not the url of hte requezt. 
        })


    }


// This piece of code toggles the class of all cards when a single card is clicked - and doesn't prevent all cards from then being shuffled.
    $scope.toggleClassName = function($event, className) {
        className = className || 'isactive';
        $($event.target).toggleClass(className);
    };






}])
