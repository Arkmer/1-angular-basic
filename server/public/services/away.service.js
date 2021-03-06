app.service('AwayService', ['$http', function($http){
    console.log('AwayService -- loaded');
    let self = this;

    let verbose = true;

    self.feelGood = function(){
        console.log('You are awesome and people appreciate you!')
    }

    self.submitText = function(text){
        if (verbose == true){console.log('submitText -- Start');}
        if (verbose == true){console.log('Sending:', textHold);}
        $http({
            method: 'POST',
            url: '/away/submit',
            data: {text: text} // GOAL: Move this into it's own variable and get the text box to clear.
        }).then((res)=>{
            console.log('submitText res:', res.data);
        }).catch((error)=>{
            console.log('submitText error:', error);
        })
        if (verbose == true){console.log('submitText -- Finish');}
    }
}]);