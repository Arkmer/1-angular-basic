app.service('BetaService', ['$http', function($http){
    console.log('BetaService -- loaded');
    let self = this;

    self.letterArray = ['A', 'B', 'C', 'D', 'E'];

}]);