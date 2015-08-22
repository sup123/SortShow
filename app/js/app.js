'use strict';

var ShowSortApp = angular.module('ShowSortApp', [
  'ngRoute',
  'ShowSortControllers'
]);

ShowSortApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/basicview', {
        templateUrl: 'html/basicview.html',
        controller: 'BasicViewCtrl'
      }).
      otherwise({
        redirectTo: '/basicview'
      });
  }
]);
