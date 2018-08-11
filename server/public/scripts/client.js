const app = angular.module('myApp', ['ngRoute']);
console.log('client.js -- loaded');

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/away', {
        templateUrl: 'views/away.html',
        controller: 'AwayController as ac'
    }).when('/alpha', {
        templateUrl: 'views/alpha.html',
        controller: 'AlphaController as alc'
    }).when('/beta', {
        templateUrl: 'views/beta.html',
        controller: 'BetaController as bc'
    }).otherwise({redirectTo: '/'});
});