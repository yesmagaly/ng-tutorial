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
      controller: 'ControladorTareas',
      templateUrl: 'tareas.html'
      }).
     when('/empleados', {
      controller: 'ControladorEmpleados',
      templateUrl: 'empleados.html'
      }).
      otherwise({
      redirectTo: '/'
    });
  }
]);

app.factory('Empleados', [
    function() {
      return [
      {
        nombre: 'Ana', paterno: 'Guzman', materno: 'Guzman', primerDia: new Date(),         salario: 12000, telefono: '990876543', bono: 1.456789
      },
      {
        nombre: 'Kenroy', paterno: 'Chuquimia', materno: 'Ramos', primerDia: new Date(),         salario: 22000, telefono: '990436543', bono: 2.456789
      },
      {
        nombre: 'María', paterno: 'Salas', materno: 'Guzman', primerDia: new Date(),         salario: 11000, telefono: '890876543', bono: 3.456789
      },
      {
        nombre: 'César', paterno: 'Mamani', materno: 'Huanacuni', primerDia: new Date(),         salario: 14030, telefono: '390846543', bono: 2.453289
      },
      {
        nombre: 'Luciana', paterno: 'Guzman', materno: 'Goyzueta', primerDia: new Date(),         salario: 32000, telefono: '430876543', bono: 1.566789
      },
      {
        nombre: 'Joseph', paterno: 'Ramos', materno: 'Arpasi', primerDia: new Date(),         salario: 62000, telefono: '990546543', bono: 5.456789
      }
    ]
    }
  ]);

app.factory('Tareas', [
    function() {
      return [{
    texto: 'Ser super heroico con AngularJS',
    hecho: true
  }, {
    texto: 'Crear una aplicación con AngularJS',
    hecho: true
  }, {
    texto: 'Ser una super programadora con AngularJS',
    hecho: true
  }];
  }
]);

app.controller('ControladorTareas', [
  '$scope',
  'Tareas',
  function($scope, Tareas) {
  $scope.tareas = Tareas;
 $scope.agregarTarea = function() {
    $scope.tareas.push({texto: $scope.textoNuevaTarea, hecho: false});
    $scope.textoNuevaTarea = '';
  };
  
  $scope.restantes = function() {
    var cuenta = 0;
    angular.forEach($scope.tareas, function(tarea) {
      cuenta += tarea.hecho ? 0 : 1;
    });
    return cuenta;
  };
  
  $scope.eliminar = function() {
    var tareasViejas = $scope.tareas;
    $scope.tareas = [];
    angular.forEach(tareasViejas, function(tarea) {
      if (!tarea.hecho) $scope.tareas.push(tarea);
    });
  }
}]);

app.controller('ControladorEmpleados', [
  '$scope',
  'Empleados',
  function($scope, Empleados) {
  $scope.empleados = Empleados;
  $scope.ordenarPor = function(orden) {
  $scope.ordenSeleccionado = orden; 
  }
   }
]);
