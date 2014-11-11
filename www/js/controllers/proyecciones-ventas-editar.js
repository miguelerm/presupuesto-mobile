(function () {

    angular.module('presupuesto')
        .controller('ProyeccionesVentasEditar', ProyeccionesVentasEditar);

    function ProyeccionesVentasEditar() {
        this.proyeccion = {id: 1, nombre: "demox"};
        console.log(this.proyeccion);
    }

})();