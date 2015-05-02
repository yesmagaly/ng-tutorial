var app = angular.module('myApp', [])
  .factory('Fabrica', [
    function() {
      var servicio = {
        objeto: {mensaje: 'Saludos desde la fábrica!'},
        msjInicial: function() {
          servicio.objeto['mensaje'] = 'Saludos desde la fábrica!';
        },
        msjNuevo: function(msj) {
          servicio.objeto.mensaje = msj;
        }
      }
      return servicio;
    }
  ]);

app.controller('ControladorUno', [
  '$scope',
  'Fabrica',
  function($scope, Fabrica) {
    $scope.nuevo = function(){
      Fabrica.msjNuevo($scope.nuevoMensaje);
    }
    
    $scope.dato = Fabrica.objeto;
  }
]);

app.controller('ControladorDos', [
  '$scope',
  'Fabrica',
  function($scope, Fabrica) {
    $scope.nuevo = function() {
      Fabrica.msjNuevo($scope.nuevoMensaje);
    }
    $scope.dato = Fabrica.objeto;
  }
]);

app.controller('ControladorTres', [
  '$scope',
  'Fabrica',
  function($scope, Fabrica) {
    $scope.resetear = function(){
    Fabrica.msjInicial();
    }
  }
]);