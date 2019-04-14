var app = angular.module("home", []);
var user = "";
var pass = "";
var url = ' ';
var localHost = false;
if (localHost) {
    url = 'http://localhost:3030';
}
else {
    url = 'http://192.168.1.5:3030';
}
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
        $http.post(url + '/login', data, config).then(function (response) {
            console.log("La risposta che arriva dal server: " + response.data);
            //console.log(response.query);
        });
    };

});

