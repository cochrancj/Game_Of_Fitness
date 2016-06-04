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
        $http.get('/users/current_user').then(function(response){
            var id = response.data[0].id;
            var config ={
                mana: mana,
                cardid: cardid
            }
            var userMana = response.data[0].mana

            console.log(id);
            console.log(config);
            console.log(userMana);
            $http.put('/users/'+id, config).then(function(response){
                 console.log(mana, cardid);
            })

// Started PUT "/users/4" for ::1 at 2016-06-03 14:21:31 -0400
// Processing by UsersController#update as HTML
//   Parameters: {"mana"=>2, "cardid"=>1, "id"=>"4", "user"=>{"mana"=>2}}
//   User Load (0.4ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT 1  [["id", 4]]
// Completed 404 Not Found in 2ms (ActiveRecord: 0.4ms)
//
// ActiveRecord::RecordNotFound (Couldn't find User with 'id'=4):
//   app/controllers/users_controller.rb:23:in `update'
        })


    }

    $scope.toggleClassName = function($event, className) {
        className = className || 'isactive';
        $($event.target).toggleClass(className);
    };



    // $scope.generateLoot = function(){
    //     var loot = [];
    //     if $scope.cards.css(className == 'isactive'){
    //         return loot
    //     }
    // }


}])
