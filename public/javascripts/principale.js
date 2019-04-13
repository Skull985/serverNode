var app = angular.module("home", []);
var user = "";
var pass = "";
app.controller("Principale", function ($http) {
    this.vedi = function () {
        var data = {
            "user": this.user,
            "pass": this.pass
        };
        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        $http.post('http://localhost:3030/login', data, config).then(function (response) {
            console.log("La risposta che arriva dal server: " + response.data);
            //console.log(data);
        });
    };

});

