(function () {

    angular.module('presupuesto')
        .controller('GastosEditar', GastosEditar);

    GastosEditar.$inject = ['$stateParams', '$state', '$http', 'cfg'];

    function GastosEditar($stateParams, $state, $http, cfg) {

        var vm = this;
        vm.gasto = null;
        vm.guardar = guardar;

        function init() {
            var id = $stateParams.id;
            if (id != 0) {
                consultarGasto(id);
            }
        }
        
        function consultarGasto(id) {
            var gastoUrl = cfg.apiUrl + '/gasto/' + id;
            $http.get(gastoUrl)
                .success(cargarGasto);
        }

        function cargarGasto(gasto){
            vm.gasto = gasto;
        }

        function guardar() {
            var gastoUrl = cfg.apiUrl + '/gasto/';
            var promesa = null;

            if (vm.gasto.id) {
                gastoUrl += vm.gasto.id;
                promesa = $http.put(gastoUrl, vm.gasto);
            } else {
                promesa = $http.post(gastoUrl, vm.gasto);
            }

            promesa
                .success(gastoGuardado)
                .error(errorAlGuardar);
        }

        function gastoGuardado() {
            $state.transitionTo('app.gastos');
        }

        function errorAlGuardar(data) {
            toast('ocurrio un error inesperado al guardar el gasto ' + data.message)
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