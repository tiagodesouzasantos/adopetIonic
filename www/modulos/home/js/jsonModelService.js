angular.module('home')
.service('jsonModelService',function($q){
    return {

        getDados:function(param){

            var deferred = $q.defer();
            switch(param){

                case 'homePosts':
                    deferred.resolve(this.homePosts());
                break;
                case 'meusPetsPosts':
                    deferred.resolve(this.meusPetsPosts());
                break;
            }

            return deferred.promise;
        },

        
        meusPetsPosts:function(){
            return {'adocao':{},'favoritos':{}};
        },
        homePosts:function(){

            return [
                {
                    "id": "1",
                    "title": "#01 - Dog",
                    "desc": "Lorem Ipsum Doguineos lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "tipo":"Cachorro",
                    "cor":"Bege",
                    "raca":"Labrador",
                    "urlImg": "http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg",
                    "arrImgs": [
                        "http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-independente.jpg",
                        "http://portaldodog.com.br/cachorros/wp-content/uploads/2015/04/weimaraner-cachorro-raca-400x210.jpg",
                        "http://4.bp.blogspot.com/-hFiCHSbATPY/U6tMzka6qwI/AAAAAAAAAak/L288Sh1YcfY/s1600/hotel+para+cachorro.jpeg",
                    ],
                },
                {
                    "id": "2",            
                    "title": "#02 - Dog",
                    "desc": "Lorem Ipsum Doguineos Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "tipo":"Cachorro",
                    "cor":"Bege",
                    "raca":"Labrador",
                    "urlImg": "http://portaldodog.com.br/cachorros/wp-content/uploads/2012/10/10-frases-cachorros.jpg",
                    "arrImgs": [
                        "http://portaldodog.com.br/cachorros/wp-content/uploads/2012/10/10-frases-cachorros.jpg",
                        "http://portaldodog.com.br/cachorros/wp-content/uploads/2015/04/weimaraner-cachorro-raca-400x210.jpg",
                        "http://4.bp.blogspot.com/-hFiCHSbATPY/U6tMzka6qwI/AAAAAAAAAak/L288Sh1YcfY/s1600/hotel+para+cachorro.jpeg",
                    ],
                },
                {
                    "id": "3",        
                    "title": "#03 - Dog",
                    "desc": "Lorem Ipsum Doguineos Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "tipo":"Cachorro",
                    "cor":['Preto','Bege'],
                    "raca":"Husky",
                    "urlImg": "http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-lambendo-focinho.jpg",
                    "arrImgs": [
                        "http://tudosobrecachorros.com.br/wp-content/uploads/cachorro-lambendo-focinho.jpg",
                        "http://portaldodog.com.br/cachorros/wp-content/uploads/2015/04/weimaraner-cachorro-raca-400x210.jpg",
                        "http://4.bp.blogspot.com/-hFiCHSbATPY/U6tMzka6qwI/AAAAAAAAAak/L288Sh1YcfY/s1600/hotel+para+cachorro.jpeg",
                    ],
                },
                {
                    "id": "4",
                    "title": "#04 - Dog",
                    "desc": "Lorem Ipsum Doguineos Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "tipo":"Cachorro",
                    "cor":['branco','Bege'],
                    "raca":"chiuaua",
                    "urlImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfDnsbCagBCGbEBlsEVYCMcNseFHq7fV6ULkaASzhfvsHvwHp",
                    "arrImgs": [
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfDnsbCagBCGbEBlsEVYCMcNseFHq7fV6ULkaASzhfvsHvwHp",
                        "http://portaldodog.com.br/cachorros/wp-content/uploads/2015/04/weimaraner-cachorro-raca-400x210.jpg",
                        "http://4.bp.blogspot.com/-hFiCHSbATPY/U6tMzka6qwI/AAAAAAAAAak/L288Sh1YcfY/s1600/hotel+para+cachorro.jpeg",
                    ],
                },
            ];
        },
    };
})

    