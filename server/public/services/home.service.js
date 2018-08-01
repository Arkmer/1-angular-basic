app.service('HomeService', function(){
    console.log('HomeService -- loaded');
    let self = this;

    self.message = 'I am alive!';
    self.count = 0;
    self.test = function(){
        self.count += 1;
        console.log('Test -- logged:', self.count);
    }
});