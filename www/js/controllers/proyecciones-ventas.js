(function () {

    angular.module('presupuesto')
        .controller('ProyeccionesVentas', ProyeccionesVentas);

    function ProyeccionesVentas() {
        this.proyecciones = [{id: 1, nombre: "demox"}];
        console.log(this.proyecciones[0]);
    }

})();
