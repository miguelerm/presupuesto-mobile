(function () {

    angular.module('presupuesto')
        .controller('ProyeccionesGastos', ProyeccionesGastos);

    function ProyeccionesGastos() {
        this.proyecciones = [{id: 1, nombre: "demox"}];
        console.log(this.proyecciones[0]);
    }

})();
