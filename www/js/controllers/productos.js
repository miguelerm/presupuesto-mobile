(function () {

    angular.module('presupuesto')
        .controller('Productos', Productos);

    Productos.$inject = ['$http', '$ionicPopup', 'cfg'];

    function Productos($http, $ionicPopup, cfg) {
        var vm = this;
        vm.productos = [];
		vm.eliminar = eliminar;

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

		function eliminar(producto) {
            $ionicPopup.confirm({
                title: 'Eliminar Producto',
                template: '¿Seguro que desea eliminar el producto ' + producto.nombre + '?'
            })
            .then(function(res) {
                if(res) {
                    eliminarProducto(producto);
                }
            });
        }

        function eliminarProducto(producto) {
            var productosUrl = cfg.apiUrl + '/producto/' + producto.id;
            $http.delete(productosUrl)
                .success(function () {
                    eliminarDelArray(producto);
                })
                .error(mostrarError);
        }

        function eliminarDelArray(producto) {
            var index = vm.productos.indexOf(producto);
            vm.productos.splice(index, 1);
        }

        function mostrarError(data) {
            toast('ocurrio un error inesperado al guardar el producto ' + data.message)
        }

        function toast(mensaje) {
            if (window.navigator.simulator || !window.plugins || !window.plugins.toast) {
                alert(mensaje);
            } else  {
                window.plugins.toast.showLongBottom(mensaje);
            }
        }
        init();
    }

})();

