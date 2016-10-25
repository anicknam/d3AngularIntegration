(function () {
  'use strict';

  angular.module('myApp.controllers')
    .controller('DemoCtrl', function($scope){
      $scope.title = "GoalTree";
      $scope.d3Data = [
        {
          "name": "Top Level",
          "parent": "null",
          "children": [
            {
              "name": "Level 2: A",
              "parent": "Top Level",
              "children": [
                {
                  "name": "Son of A",
                  "parent": "Level 2: A"
                },
                {
                  "name": "Daughter of A",
                  "parent": "Level 2: A"
                }
              ]
            },
            {
              "name": "Level 2: B",
              "parent": "Top Level"
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
