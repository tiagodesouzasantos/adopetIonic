angular.module('app')
    .service('dbMethodsService', function($q, $http, urlMaps) {
        return {
            dbStoredProcedure: function(param_storedprocedure, param_sp_param, conexao) {
                var data = {
                    'tipoServico': 'SP_JSON',
                    'storedprocedure': param_storedprocedure,
                    'param': param_sp_param,
                    'conexao': conexao
                };

                var deferred = $q.defer();
                $http.post(urlMaps.getUrl('v1DbServicesIndex'), data).then(function(response) {
                    responseData = response.data;
                    if (responseData.rows.length <= 0) {
                        deferred.reject("sem dados");
                    } else {
                        deferred.resolve(responseData);
                    }
                }, function(response) {
                    //Second function handles error
                    console.log("error");
                    console.log(response);
                });
                return deferred.promise;
            }
        }
    })