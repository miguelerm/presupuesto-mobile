// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('presupuesto', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "",
      abstract: true,
      templateUrl: "templates/menu.html"
    })

    .state('app.gastos', {
      url: "/gastos",
      views: {
        'menuContent' :{
          templateUrl: "templates/gastos.html",
          controller: 'Gastos as vm'
        }
      } 
    })

    .state('app.gastos-editar', {
      url: "/gastos/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/gastos-editar.html",
          controller: 'GastosEditar as vm'
        }
      } 
    })

    .state('app.productos', {
      url: "/productos",
      views: {
        'menuContent' :{
          templateUrl: "templates/productos.html",
          controller: 'Productos as vm'
        }
      } 
    })

    .state('app.productos-editar', {
      url: "/productos/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/productos-editar.html",
          controller: 'ProductosEditar as vm'
        }
      } 
    })

    .state('app.proyecciones-gastos', {
      url: "/proyecciones/gastos",
      views: {
        'menuContent' :{
          templateUrl: "templates/proyecciones-gastos.html",
          controller: "ProyeccionesGastos as vm"
        }
      }
    })

    .state('app.proyecciones-ventas', {
      url: "/proyecciones/ventas",
      views: {
        'menuContent' :{
          templateUrl: "templates/proyecciones-ventas.html",
          controller: "ProyeccionesVentas as vm"
        }
      }
    })

    .state('app.proyecciones-gastos-editar', {
      url: "/proyecciones/gastos/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/proyecciones-gastos-editar.html",
          controller: "ProyeccionesGastosEditar as vm"
        }
      }
    })

    .state('app.proyecciones-ventas-editar', {
      url: "/proyecciones/ventas/:id",
      views: {
        'menuContent' :{
          templateUrl: "templates/proyecciones-ventas-editar.html",
          controller: "ProyeccionesVentasEditar as vm"
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/gastos');
});

