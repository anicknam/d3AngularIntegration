(function () {
  'use strict';

  angular.module('myApp.controllers')
    .controller('DemoCtrl', function($scope){
      $scope.title = "GoalTree";
      $scope.d3Data = [
        {
          "name": "Top Level",
          "children": [
            {
              "name": "Level 2: A",
              "children": [
                {
                  "name": "Son of A",
                },
                {
                  "name": "Daughter of A",
                }
              ]
            },
            {
              "name": "Level 2: B",
            }
          ]
        }
      ];
      // $scope.d3Data = [
      //   {name: "Greg", score:98},
      //   {name: "Ari", score:96},
      //   {name: "Loser", score: 48}
      // ];
      // $scope.d3OnClick = function(item){
      //   alert(item.name);
      // };
    });

}());
