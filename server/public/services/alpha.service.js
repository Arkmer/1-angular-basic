app.service('AlphaService', ['$http', function($http){
    console.log('AlphaService -- loaded');
    let self = this;

    self.textHold = {text: ''};
    self.textArray = [];

    self.textCommit = function(textInput){
        self.textHold = {text: textInput};
    };

    self.textPost = function(text){
        self.textCommit(text);
        $http({
            method: 'POST',
            url: '/alpha',
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
            url: '/alpha'
        }).then((response)=>{
            console.log('textGet res.data:', response.data);
            self.textArray.list = response.data;
        }).catch((error)=>{
            console.log('textGet error:', error);
        })
    }

    self.textDelete = function(id){
        console.log('deleteText -- Start', id);
        $http({
            method: 'DELETE',
            url: `/alpha/${id}`
        }).then((response)=>{
            console.log('textDelete res:', response.data);
            self.textGet();
        }).catch((error)=>{
            console.log('textDelete error:', error);
        })
    }
}]);