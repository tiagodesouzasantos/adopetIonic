angular.module('menu')

.controller('menuController', function($scope, $rootScope, $mdSidenav) {
    $scope.usuario = {
        imgPerfil: "https://scontent.fssz2-1.fna.fbcdn.net/v/t1.0-9/20953979_1446526965423204_7780215963643487658_n.jpg?oh=05cb89103b612474619785b199f15a24&oe=5A4EDA66",
        nome: "Tiago Souza",
        email: "tiago.souza.santos1989@gmail.com"
    }
});