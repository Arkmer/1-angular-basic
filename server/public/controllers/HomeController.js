app.controller('HomeController', ['HomeService', function(HomeService){
    console.log('HomeController -- loaded');

    let self = this;
    self.HomeService = HomeService;
    self.message = HomeService.message;
    self.count = HomeService.count;
    self.test = HomeService.test;
}]);