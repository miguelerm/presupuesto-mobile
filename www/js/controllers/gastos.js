(function () {

    angular.module('presupuesto')
        .controller('Gastos', Gastos);

    function Gastos() {
        this.gastos = [{id: 1, nombre: "demo"}];
        console.log(this.gastos[0]);
    }

})();

