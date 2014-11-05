(function () {

    angular.module('presupuesto')
        .controller('GastosEditar', GastosEditar);

    function GastosEditar() {
        this.gastos = [{id: 1, nombre: "demo"}];
        console.log(this.gastos[0]);
    }

})();