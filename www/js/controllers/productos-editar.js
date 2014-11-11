(function () {

    angular.module('presupuesto')
        .controller('ProductosEditar', ProductosEditar);

    function ProductosEditar() {
        this.producto = {id: 1, nombre: "demoz"};
        console.log(this.producto);
    }

})();