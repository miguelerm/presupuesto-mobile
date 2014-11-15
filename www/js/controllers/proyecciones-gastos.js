(function () {

    angular.module('presupuesto')
        .controller('ProyeccionesGastos', ProyeccionesGastos);

    ProyeccionesGastos.$inject = ['$http','$ionicPopup', 'cfg'];

    function ProyeccionesGastos($http, $ionicPopup, cfg) {
        
        var vm = this;
        vm.proyecciones = [];
        vm.eliminar = eliminar;
        vm.mesese = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        function init() {
            var url = cfg.apiUrl + '/proyeccionGasto'
            $http.get(url)
                .success(cargarDatos)
        }

        function cargarDatos(datos) {

            // limpiar las proyecciones
            vm.proyecciones.splice(0, vm.proyecciones.length);

            // se agregan las proyecciones
            for (var i = 0; i < datos.length; i++) {
                item = datos[i];
                item.fecha = new Date(item.anio, item.mes - 1, 1);
                vm.proyecciones.push(item);
            };
        }

        function eliminar(proyeccion) {
            $ionicPopup.confirm({
                title: 'Eliminar proyeccion',
                template: '¿ Seguro que desea eliminar la proyeccion ' + proyeccion.id + '?'
            })
            .then(function (res) {
                if (res) {
                    eliminarProyeccion(proyeccion);
                }
            });
        }

        function eliminarProyeccion(proyeccion) {
            var proyeccionUrl = cfg.apiUrl + '/proyeccionGasto/' + proyeccion.id;
            $http.delete(proyeccionUrl)
                .success(function () {
                    eliminarDelArray(proyeccion);
                })
                .error(mostrarError);
        }

        function eliminarDelArray(proyeccion) {
            var index = vm.proyecciones.indexOf(proyeccion);
            vm.proyecciones.splice(index, 1);
        }

        function mostrarError(data) {
            toast('ocurrio un error inesperado al guardar la proyección ' + data.message)
        }

        function mensaje() {
            toast('Gasto Agregado a la Proyeccion.')
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
