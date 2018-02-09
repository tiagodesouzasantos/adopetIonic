angular.module('app')
    .service('urlMaps', function() {
        return {
            getUrl: function(url) {
                var environment = 'development';

                switch (environment) {
                    case 'development':
                        var listUrls = this.development();
                        return listUrls[url];
                        break;
                    default:
                        var listUrls = this.production();
                        return listUrls[url];
                }
            },
            development: function() {
                return {
                    v1User: "http://localhost/api/v1/user/",
                    v1DbServicesIndex: "http://localhost/api/v1/dbServices/index.php"
                }
            },
            production: function() {
                return {
                    v1User: ""
                }
            }
        }
    });