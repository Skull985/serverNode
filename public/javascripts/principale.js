var app = angular.module("home", []);
var user = "";
var pass = "";
app.controller("Principale", function () {
    this.vedi = function ($http) {
        console.log("User: " + this.user);
        console.log("Password: " + this.pass);
    };

});

