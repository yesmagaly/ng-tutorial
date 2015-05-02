var app = angular.module('myApp', []);

app.controller('ControladorTareas', ['$scope', function($scope){
  $scope.tareas = [{
    texto: 'Ser super heroico con AngularJS',
    hecho: true
  }, {
    texto: 'Crear una aplicación con AngularJS',
    hecho: true
  }, {
    texto: 'Ser una super programadora con AngularJS',
    hecho: true
  }];
  
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
  };

}]);
