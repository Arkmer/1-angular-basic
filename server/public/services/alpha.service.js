app.service('AlphaService', ['$http', function($http){
    console.log('AlphaService -- loaded');
    let self = this;

    self.textHold = {text: ''};
    self.textArray = [];
    self.update = {};
    self.textInput = '';

    self.textCommit = function(textInput){
        self.textHold = {text: textInput};
        self.textInput = '';
    };

    self.textPost = function(text){
        self.textCommit(text);
        $http({
            method: 'POST',
            url: '/alpha',
            data: self.textHold
        }).then((response)=>{
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
            self.textArray.list = response.data;
        }).catch((error)=>{
            console.log('textGet error:', error);
        })
    }

    self.textDelete = function(id){
        $http({
            method: 'DELETE',
            url: `/alpha/${id}`
        }).then((response)=>{
            self.textGet();
        }).catch((error)=>{
            console.log('textDelete error:', error);
        })
    }

    self.textEdit = function(edit, id){
        self.update.edit = edit;
        self.update.id = id
        $http({
            method: 'PUT',
            url: `/alpha`,
            data: self.update
        }).then((response)=>{
            self.textGet();
        }).catch((error)=>{
            console.log('textEdit error:', error);
        })
    }
}]);