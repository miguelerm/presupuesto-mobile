(function () {

    angular.module('presupuesto')
        .controller('Gastos', Gastos);

    Gastos.$inject = ['$http', '$ionicPopup', 'cfg'];

    function Gastos($http, $ionicPopup, cfg) {
        
        var vm = this;
        vm.gastos = [];
        vm.eliminar = eliminar;

        function init() {
            var gastosUrl = cfg.apiUrl + '/gasto'
            $http.get(gastosUrl)
                .success(cargarGastos)
        }

        function cargarGastos(datos) {

            // limpiar los gastos
            vm.gastos.splice(0, vm.gastos.length);

            // se agregan los gastos
            for (var i = 0; i < datos.length; i++) {
                item = datos[i];
                vm.gastos.push(item);
            };
        }

        function eliminar(gasto) {
            $ionicPopup.confirm({
                title: 'Eliminar Gasto',
                template: '¿Seguro que desea eliminar el gasto ' + gasto.nombre + '?'
            })
            .then(function(res) {
                if(res) {
                    eliminarGasto(gasto);
                }
            });
        }

        function eliminarGasto(gasto) {
            var gastosUrl = cfg.apiUrl + '/gasto/' + gasto.id;
            $http.delete(gastosUrl)
                .success(function () {
                    eliminarDelArray(gasto);
                })
                .error(mostrarError);
        }

        function eliminarDelArray(gasto) {
            var index = vm.gastos.indexOf(gasto);
            vm.gastos.splice(index, 1);
        }

        function mostrarError(data) {
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

