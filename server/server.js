const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, function(){
    console.log('Listening on port', port);
});

const awayRouter = require('./routes/awayRouter.js');
app.use('/away', awayRouter);

const alphaRouter = require('./routes/alphaRouter.js');
app.use('/alpha', alphaRouter);

const betaRouter = require('./routes/betaRouter.js');
app.use('/beta', betaRouter);