app.controller('HomeController', ['HomeService', '$scope', function(HomeService, $scope){
    console.log('HomeController -- loaded');
    let self = this;

    self.HomeService = HomeService;
    self.message = HomeService.message;
    self.text = HomeService.text;

    self.newText = '';
    self.lastText = '';
    self.lastCommit = function(newText){
        self.lastText = self.newText;
        self.text.list.push(self.newText);
        self.newText = '';
    }

    self.deleteText = function(text){
        console.log(text);
    //     for(item in self.text.list){
    //         if(text = item){
    //             self.text.list.splice();
    //         }
    //     }
    }
}]);