'use strict';

/* This defines what controllers and other utilities */
/* The app will be using */
var SortShowApp = angular.module('SortShowApp', [
  'ngRoute',
  'ShowSortControllers'
]);

/* Since we said we wanted to use ngRoute */
/* We can define the routing of our webapp */
/* In this fashion */
SortShowApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'html/simpleList.html',
        controller: 'SimpleListCtrl'

      }).
      when('/BasicView',{
        templateUrl: 'html/ListEx.html',
        controller: 'DamiensViewCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
