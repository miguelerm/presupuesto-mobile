(function () {

    angular.module('presupuesto')
        .controller('ProyeccionesGastosEditar', ProyeccionesGastosEditar);

    function ProyeccionesGastosEditar() {
        this.proyeccion = {id: 1, nombre: "demox"};
        console.log(this.proyeccion);
    }

})();