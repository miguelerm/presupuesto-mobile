(function () {

    angular.module('presupuesto')
        .controller('Productos', Productos);

    Productos.$inject = ['$http', 'cfg'];

    function Productos($http, cfg) {
        var vm = this;
        vm.productos = [];

        function init() {
            var productosUrl = cfg.apiUrl + '/producto'
            $http.get(productosUrl)
                .success(cargarProductos)
        }

        function cargarProductos(datos) {

            // limpiar los productos
            vm.productos.splice(0, vm.productos.length);

            // se agregan los productos
            for (var i = 0; i < datos.length; i++) {
                item = datos[i];
                vm.productos.push(item);
            };
        }

        init();
    }

})();

