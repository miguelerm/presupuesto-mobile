(function () {

    angular.module('presupuesto')
        .controller('ProductosEditar', ProductosEditar);

	ProductosEditar.$inject = ['$stateParams', '$state', '$http', 'cfg'];

    function ProductosEditar($stateParams, $state, $http, cfg) {
		var vm = this;
        vm.producto = null;
        vm.guardar = guardar;
       
       
		function init() {
            var id = $stateParams.id;
            if (id != 0) {
                consultarProducto(id);
            }
        }
        
        function consultarProducto(id) {
            var productoUrl = cfg.apiUrl + '/producto/' + id;
            $http.get(productoUrl)
                .success(cargarProducto);
        }

        function cargarProducto(producto){
            vm.producto = producto;
        }

        function guardar() {
            var productoUrl = cfg.apiUrl + '/producto/';
            var promesa = null;

            if (vm.producto.id) {
                productoUrl += vm.producto.id;
                promesa = $http.put(productoUrl, vm.producto);
            } else {
                promesa = $http.post(productoUrl, vm.producto);
            }

            promesa
                .success(productoGuardado)
                .error(errorAlGuardar);
        }

        function productoGuardado() {
            $state.transitionTo('app.productos');
        }

        function errorAlGuardar(data) {
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