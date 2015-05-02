'use strict';
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
      when('/', {
      templateUrl: 'inicio.html',
      controller: 'MyCtrl'
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

