app.controller('HomeController', ['HomeService', '$scope', function(HomeService, $scope){
    console.log('HomeController -- loaded');

    let self = this;
    self.HomeService = HomeService;
    $scope.message = self.HomeService.message;
}]);