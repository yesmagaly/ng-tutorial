var app = angular.module('myApp', []);

app.controller('ControladorFiltros', ['$scope', function($scope){
  $scope.empleados = 
    [
       
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
      },
    ];
  
  $scope.ordenarPor = function(orden) {
    $scope.ordenSeleccionado = orden; 
  }
  
}]);
