(function () {

    angular.module('presupuesto')
        .controller('Productos', Productos);

    function Productos() {
        this.productos = [{id: 1, nombre: "demox"}];
        console.log(this.productos[0]);
    }

})();

