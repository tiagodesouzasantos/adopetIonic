angular.module('meusPets')

.controller('meusPetsController', function($scope, $rootScope, $mdSidenav,$element,$mdDialog,filtroHome,$state,$stateParams) {
    
    $rootScope.title = 'Meus Pets';
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    
    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }


    $scope.goTo = function(param,postParam){
    	$state.go(param,{idPost:postParam.id});
    }
    
    
    if($stateParams.idPost){
        $scope.postTarget = $rootScope.meusPets.adocao[$stateParams.idPost];
    }

});