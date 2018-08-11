app.controller('BetaController', ['BetaService', '$scope', function(BetaService, $scope){
    console.log('BetaController -- loaded');
    let self = this;

    self.BetaService = BetaService;
    self.letterArray = BetaService.letterArray;
    
    self.numberArray = [1, 2, 3, 4, 5];
}]);