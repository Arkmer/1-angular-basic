app.service('AlphaService', ['$http', function($http){
    console.log('AlphaService -- loaded');
    let self = this;

    self.textHold = {text: ''};
    self.textArray = [];
    self.update = {};

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
        console.log('textDelete -- Start', id);
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

    self.textEdit = function(edit, id){
        console.log('textEdit -- Update:', edit);
        console.log('textEdit -- ID:', id);
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