'use strict';

var SortShowControllers = angular.module('ShowSortControllers', []);

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

SortShowControllers.controller('SimpleListCtrl', ['$scope',
  function($scope) {
      $scope.numbers = [];

      $scope.add = function(event) {
        if(event.keyCode === 13){
          if ($scope.listInput.trim() != "") {
            var num = $scope.listInput.trim();
            if (!isNaN(num)) {
              var numbers =  $scope.numbers;
              if (numbers.indexOf(num) == -1) {
                numbers.push(num);
              }
            }
          }
          $scope.listInput = "";
        }
      };

      $scope.sort = function() {
        var timer = setInterval(function () {sortStep($scope.numbers)}, 1000);
      };
  }
]);
