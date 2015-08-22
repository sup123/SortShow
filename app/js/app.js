'use strict';

var ShowSortApp = angular.module('ShowSortApp', [
  'ngRoute',
  'ShowSortControllers'
]);

ShowSortApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/basicview.html',
        controller: 'DamiensViewCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
