(function () {

    angular.module('presupuesto')
        .controller('ProyeccionesGastosEditar', ProyeccionesGastosEditar);

    ProyeccionesGastosEditar.$inject = ['$stateParams', '$state', '$http', 'cfg'];

    function ProyeccionesGastosEditar($stateParams, $state, $http, cfg) {

        //this.proyeccion = {id: 1, nombre: "demox"};
        //console.log(this.proyeccion);
        var vm = this;
        vm.proyeccion = null;
        vm.guardar = guardar;
        vm.ocultar = true;
        function init() {
            var id = $stateParams.id;
            if (id != 0) {
                consultarProyeccion(id);
                vm.ocultar = false;
            }
        }

        function consultarProyeccion(id) {
            var proyeccionUrl = cfg.apiUrl + '/proyeccionGasto/' + id;
            $http.get(proyeccionUrl)
                .success(cargarProyeccion);
        }

        function cargarProyeccion(proyeccion) {
            vm.proyeccion = proyeccion;
        }

        function guardar() {
            var proyeccionUrl = cfg.apiUrl + '/proyeccionGasto/';
            var promesa = null;

            if (vm.proyeccion.id) {
                proyeccionUrl += vm.proyeccion.id;
                promesa = $http.put(proyeccionUrl, vm.proyeccion);
            } else {
                promesa = $http.post(proyeccionUrl, vm.proyeccion);
            }

            promesa
                .success(proyeccionGuardada)
                .error(errorAlGuardar);
        }

        function proyeccionGuardada() {
            $state.transitionTo('app.proyecciones-gastos');
        }

        function errorAlGuardar(data) {
            toast('ocurrio un error inesperado al guardar la proyeccion ' + data.message)
        }
     
        function toast(mensaje) {
            if (window.navigator.simulator || !window.plugins || !window.plugins.toast) {
                alert(mensaje);
            } else {
                window.plugins.toast.showLongBottom(mensaje);
            }
        }

        init();
    }

})();