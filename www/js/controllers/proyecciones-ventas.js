(function () {

    angular.module('presupuesto')
        .controller('ProyeccionesVentas', ProyeccionesVentas);

    function ProyeccionesVentas() {
        this.proyecciones = [{id: 1, nombre: "demox"}];
        console.log(this.proyecciones[0]);
    }

    ProyeccionesVentas.$inject = ['$http', 'cfg'];

    function ProyeccionesVentas($http, cfg) {
        
        var vm = this;
        vm.proyecciones = [];

        function init() {
            var url = cfg.apiUrl + '/proyeccionventa'
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

        init();
    }

})();
