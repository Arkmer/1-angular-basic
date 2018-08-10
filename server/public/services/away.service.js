app.service('AwayService', ['$http', function($http){
    console.log('AwayService -- loaded');
    let self = this;

    let verbose = true;

    self.feelGood = function(){
        console.log('You are awesome and people appreciate you!')
    }

    self.submitText = function(text){
        if (verbose == true){console.log('submitText -- Start');}
        $http({
            method: 'POST',
            url: '/away/submit',
            data: text
        }).then((res)=>{

        }).catch((error)=>{
            console.log('submitText Error:', error);
        })
        if (verbose == true){console.log('submitText -- Finish');}
    }
}]);