angular.module('usuario')
    .service('user', function($http, urlMaps, dbMethodsService) {
        return {
            save: function(user) {
                if (typeof user.address.address == 'object') {
                    user.address = this.formatAddress(user.address.address);
                }

                var spName = 'app_user';
                var spParamObj = user;
                var spParam = ["INSERT", JSON.stringify(spParamObj), user.email];
                var resultDbMethods = dbMethodsService.dbStoredProcedure(spName, spParam, 'adopet');

                return resultDbMethods.then(function(dbMethodsResult) {
                    console.log('dbMethodsResult', dbMethodsResult);
                    return {
                        data: JSON.parse(dbMethodsResult.rows[0].json),
                        msg: dbMethodsResult.rows[0].msg
                    };
                }).catch(function(dbMethodsError) {
                    console.log('dbMethodsError', dbMethodsError);
                    return {
                        msg: 1
                    };
                });
            },
            formatAddress: function(googleAddress) {
                return {
                    address: googleAddress.formatted_address,
                    geolocation: {
                        lat: googleAddress.geometry.location.lat(),
                        lng: googleAddress.geometry.location.lng()
                    }
                };
            }
        };
    })