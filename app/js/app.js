'use strict';

var SortShowApp = angular.module('SortShowApp', [
  'ngRoute',
  'ShowSortControllers'
]);

SortShowApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/basicview.html',
        controller: 'DamiensViewCtrl'
      }).
      when('/ListExample',{
        templateUrl: 'html/simpleList.html',
        controller: 'SimpleListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
