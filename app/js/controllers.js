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
SortShowControllers.controller('SimpleListCtrl', ['$scope', '$interval',
  function($scope, $interval) {

       $scope.selectedItem = 'Choose Algorithm';

       /* These will be binded to the bootstrap dropdown */
       $scope.options = ['Bubble Sort', 'Merge Sort', 'Selection Sort', 'Insertion Sort', 'Quick Sort'];
       $scope.selectedItem;

      /* update drop down choice */
       $scope.dropboxitemselected = function (item) {

               $scope.selectedItem = item;
        }


       $scope.numbers = [];
       var running;

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

                numbers.push(parseInt(num));
              }
            }
          }

          /* Clear the textbox after attempted input */
          $scope.listInput = "";
        }
      };

      $scope.sort = function() {
        if ( angular.isDefined(running) ) return;

        $scope.i = $scope.numbers.length - 1;
        $scope.j = 1;
        $scope.k = 0;

        running = $interval(function() {
          var update = selectionSortWalkthrough($scope.numbers, $scope.i, $scope.j, $scope.k);

          $scope.numbers = update["list"];
          $scope.i = update["i"];
          $scope.j = update["j"];
          $scope.k = update["k"];

          if (isSorted($scope.numbers)) {
            $scope.endSort();
          }
        }, 2000);
      };

      $scope.endSort = function() {
        if (angular.isDefined(running)) {
            $interval.cancel(running);
            running = undefined;
          }
      };


  }
]);
