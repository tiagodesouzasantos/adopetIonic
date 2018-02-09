angular.module('app')
    .service('device', function($http, urlMaps, dbMethodsService) {
        return {
            saveOnStorage: function(storage, itemName, data) {
                switch (storage) {
                    case 'local':
                        localStorage.setItem(itemName, window.btoa(data));
                        break;
                    case 'session':
                        sessionStorage.setItem(itemName, window.btoa(data));
                        break;
                }
            },
            getDataStorage: function(storage, itemName) {
                try {
                    switch (storage) {
                        case 'local':
                            var data = localStorage.getItem(itemName);
                            return data == null ? '{}' : window.atob(data);
                            break;
                        case 'session':
                            var data = sessionStorage.getItem(itemName);
                            return data == null ? '{}' : window.atob(data);
                            break;
                    }
                } catch (e) {
                    return { "error": e };
                }
            }
        };
    })