'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.config([
  '$routeProvider', 
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    
    $routeProvider.
      when('/', {
        templateUrl: 'inicio.html'
      }).
     when('/tareas', {
      templateUrl: 'tareas.html'
      }).
     when('/empleados', {
      templateUrl: 'empleados.html'
      }).
      otherwise({
      redirectTo: '/'
    });
  }
]);