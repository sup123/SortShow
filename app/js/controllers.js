'use strict';

/* Initializing the controllers associated with the webapp */
var SortShowControllers = angular.module('ShowSortControllers', []);

/* This contoller simply pushes a string variable into the scope */
/* Its name is the first variable and the functionality is */
/* defined by the array passed in as the second variable */
SortShowControllers.controller('BasicViewCtrl', ['$scope',
  function($scope) {
    $scope.name = 'Suparna is Damiens favorite person';
  }
]);

SortShowControllers.controller('DamiensViewCtrl',  ['$scope',
  function($scope) {
    $scope.name = 'Damien';
  }
]);


/* This controller is slightly more complicated. It has two functions
 * pushed onto the scope so that they can be called in the html */
SortShowControllers.controller('SimpleListCtrl', ['$scope',
  function($scope) {
      $scope.numbers = [];

      $scope.add = function(event) {
        /* Event is a key event */
        /* Check if the keycode is 13 which mean it's enter */
        if(event.keyCode === 13){
          /* Make sure that it isnt just whitespace */
          if ($scope.listInput.trim() != "") {
            var num = $scope.listInput.trim();
            /* Make sure that the variable is a number */
            /* If it is a number add it to the number array */
            if (!isNaN(num)) {
              var numbers =  $scope.numbers;
              if (numbers.indexOf(num) == -1) {
                numbers.push(num);
              }
            }
          }

          /* Clear the textbox after attempted input */
          $scope.listInput = "";
        }
      };

      $scope.sort = function() {
        var timer = setInterval(function () {sortStep($scope.numbers)}, 1000);
      };
  }
]);
