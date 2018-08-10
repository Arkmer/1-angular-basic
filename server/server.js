const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('server/public'));

const awayRouter = require('./routes/awayRouter.js');
app.use('/away', awayRouter);

const port = process.env.PORT || 4000

app.listen(port, function(){
    console.log('Listening on port', port);
});