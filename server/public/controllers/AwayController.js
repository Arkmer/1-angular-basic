app.controller('AwayController', ['AwayService', '$scope', function(AwayService, $scope){
    console.log('AwayController -- loaded');
    let self = this;

    self.AwayService = AwayService;
    self.feelGood = AwayService.feelGood;
    self.submitText = AwayService.submitText;
}]);