app.controller('AlphaController', ['AlphaService', '$scope', function(AlphaService, $scope){
    console.log('AlphaController -- loaded');
    let self = this;

    self.AlphaService = AlphaService;
    self.textCommit = AlphaService.textCommit;
    self.textPost = AlphaService.textPost;
    self.textArray = AlphaService.textArray;
    self.textGet = AlphaService.textGet;
    self.textDelete = AlphaService.textDelete;

    self.textGet();
}]);