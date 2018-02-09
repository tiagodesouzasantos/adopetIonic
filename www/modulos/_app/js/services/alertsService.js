angular.module('app')
    .service('alerts', function($mdToast) {
        return {
            toast: function(msg) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(msg)
                    .position('bottom right')
                    .hideDelay(4000)
                );
            }
        };
    })