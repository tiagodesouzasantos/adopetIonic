angular.module('toolbar')

.controller('toolbarController', function($scope, $rootScope, $mdSidenav, $state, $element,$mdDialog,filtroHome) {

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    // $scope.title = 'AdoPet';

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }

    $scope.goTo = function(state) {
        // $rootScope.title = state;
        $state.go(state);
        $scope.toggleLeft();
    }





    // $scope.abrirFiltro = function(){
    //     console.log(filtroHome.teste());
    // }
    
    
    


});