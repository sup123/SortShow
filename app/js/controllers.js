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
