angular.module('home')

.controller('HomeCtrl', function($scope, $rootScope, $mdSidenav,$element,$mdDialog,filtroHome,jsonModelService) {
    $rootScope.title = 'Home';
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    // $rootScope.title = 'Restaurante';
    
    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        };
    }

    
    if(!$rootScope.meusPets){
        jsonModelService.getDados('meusPetsPosts').then(function(result){
            $rootScope.meusPets = result;
        });
    }

    jsonModelService.getDados('homePosts').then(function(result){

        $rootScope.jsonPosts = result;
        $scope.cursor = 0;
        $scope.postTarget = $rootScope.jsonPosts[$scope.cursor];
    });


    $scope.exibirPostCompleto=false;

    $scope.navegar = function(acao) {

        $scope.exibirPostCompleto=false;

        if (acao == 'next' && $scope.cursor < ($rootScope.jsonPosts.length - 1)) {
            $scope.cursor++;
        } else if (acao == 'prev' && $scope.cursor > 0) {
            $scope.cursor--;
        }

        $scope.postTarget = $rootScope.jsonPosts[$scope.cursor];

    }

    callTeste = function(){
        
        params = {
            'selectedRacas':$scope.selectedRacas,
            'selectedCores':$scope.selectedCores,
            'distancia':$scope.distancia,
        };

        console.log(filtroHome.teste(params));

    }



    $rootScope.abrirFiltro= function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'modulos/home/templates/filtroDados.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose:true,
          fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
        .then(function(answer) {
        }, function() {
          console.log(filtroHome.teste());
        });
    };

    

    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
          $mdDialog.hide();
        };

        $scope.cancel = function() {
          $mdDialog.cancel();
        };

        $scope.buscar = function(answer) {
            callTeste();

          $mdDialog.hide(answer);
        };

        

        
    }

    $scope.racas = ['Vira lata' ,'Pitbull' ,'Maltês' ,'chiuaua' ,'Husky', 'Labrador'];
    $scope.cores = ['Branco' ,'Marrom' ,'Preto' ,'Bege' , 'Labrador'];    
    $scope.tipos = ['Cachorro' ,'Gato' ,'Pássaro' ,'Outros'];    
    $scope.searchTerm;
    
    $scope.selectedRacas='';
    $scope.selectedCores='';
    $scope.distancia='';

    $scope.clearSearchTerm = function() {
        $scope.searchTerm = '';
    };
    // The md-select directive eats keydown events for some quick select
    // logic. Since we have a search input here, we don't need that logic.
    $element.find('input').on('keydown', function(ev) {
      ev.stopPropagation();
    });

$scope.testew = 0;
$scope.swiperImgs = function(direcao){
    console.log('HAHAHAHAHAHHA');
    var qtdImgs = $scope.postTarget.arrImgs.length;
    var proximaPosicao=$scope.testew;
    
    if(direcao=='left'){
        proximaPosicao++;
    }else{
        proximaPosicao--;
    }

    if(proximaPosicao<0){
        $scope.testew=qtdImgs-1;
    }else if(proximaPosicao>=qtdImgs){
        $scope.testew=0;
    }else{
        $scope.testew=proximaPosicao;        
    }

}


    $scope.adicionarAosFavoritos = function(paramPost) {
        $rootScope.meusPets.favoritos[paramPost.id] = paramPost;
    }

    $scope.confirmarAdocao = function(ev,postTarget) {
        $scope.postTarget=postTarget;
        $mdDialog.show({
            controller: function($scope,theScope){
                $scope.confirmaAdocao =  theScope.confirmaAdocao;
            },
            locals: {
                    theScope: $scope
                },
            templateUrl: 'modulos/home/templates/confirmaAdocao.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false // Only for -xs, -sm breakpoints.
        })
        .then(
            function(answer) {
                
                console.log('aaa');
            },
            function() {
                console.log('aaa');
                
            }
        );
    };

    $scope.confirmaAdocao = function() {
        $rootScope.meusPets.adocao[$scope.postTarget.id] = $scope.postTarget;
        $mdDialog.hide();
    };

    $scope.confirmarAdocaoOLD = function(ev,paramPost) {

        var postParam = paramPost;
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
              .title('Deseja adotar este Pet?')
              .textContent('Suas candidaturas e Pets favoritos podem ser visualizados no menu "Meus Pets"')
              .ariaLabel('Lucky day')
              .targetEvent(ev)
              .ok('Sim')
              .cancel('Não');

        $mdDialog.show(confirm).then(function() {
            
            $rootScope.meusPets.adocao[postParam.id] = postParam;
          console.log($rootScope.meusPets);


        }, function() {
          $scope.status = 'You decided to keep your debt.';
        });
  };



    

});