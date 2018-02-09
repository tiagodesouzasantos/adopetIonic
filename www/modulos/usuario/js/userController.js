angular.module('usuario')
    .controller('userController', function($scope, $rootScope, $mdSidenav, $timeout, alerts, user, device) {
        $rootScope.title = "Dados pessoais";

        $scope.userCad = JSON.parse(device.getDataStorage('local', 'userData'));

        $scope.user = {
            imgPerfil: "https://scontent.fssz2-1.fna.fbcdn.net/v/t1.0-9/20953979_1446526965423204_7780215963643487658_n.jpg?oh=05cb89103b612474619785b199f15a24&oe=5A4EDA66",
            name: "Tiago Souza",
            email: "tiago.souza.santos1989@gmail.com"
        };


        $scope.saveData = function(form) {
            user.save($scope.userCad).then(function(userSaveResult) {
                $scope.userCad = userSaveResult.data;
                device.saveOnStorage('local', 'userData', JSON.stringify(userSaveResult.data));
                alerts.toast('Cadastro realizado com sucesso!');
                console.log('userSaveResult', userSaveResult);
            }).catch(function(userSaveError) {
                console.log('userSaveError', userSaveError);
                alerts.toast('Problemas no cadastro!');
            });
        }
    });