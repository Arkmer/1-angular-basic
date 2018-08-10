app.service('AwayService', function(){
    console.log('AwayService -- loaded');
    let self = this;

    let verbose = true;

    self.feelGood = function(){
        console.log('You are awesome and people appreciate you!')
    }

    self.submitText = function(text){
        if (verbose == true){console.log('submitText -- Start');}
        if (verbose == true){console.log('submitText -- Finish');}
    }
});