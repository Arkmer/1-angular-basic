const app = angular.module('myApp', ['ngRoute']);
console.log('client.js -- loaded');

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as hc'
    }).when('/away', {
        templateUrl: 'views/away.html',
        controller: 'AwayController as ac'
    }).otherwise({redirectTo: '/'});
})