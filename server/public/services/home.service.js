app.service('HomeService', function(){
    console.log('HomeService -- loaded');
    let self = this;

    self.message = 'I am alive!';
    self.text = {list: ['Initial Placeholder', 'Second Placeholder']};
});