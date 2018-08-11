app.service('AlphaService', ['$http', function($http){
    console.log('AlphaService -- loaded');
    let self = this;

    self.textHold = {text: ''}

    self.textCommit = function(textInput){
        // console.log('textCommit -- Start');
        self.textHold = {text: textInput};
        // console.log('textCommit:', self.textHold);
    };

    self.textPost = function(text){
        self.textCommit(text);
        $http({
            method: 'POST',
            url: '/alpha/postText',
            data: self.textHold
        }).then((response)=>{
            console.log('textPost res:', response.data);
            self.textHold = {text: ''};
            self.textGet();
        }).catch((error)=>{
            console.log('textPost error:', error);
        })
    }

    self.textGet = function(){
        $http({
            methof: 'GET',
            url: '/alpha/getText'
        }).then((response)=>{
            console.log('textGet res:', response);
            console.log('textGet res.data:', response.data);
        }).catch((error)=>{
            console.log('textGet error:', error);
        })
    }
}]);