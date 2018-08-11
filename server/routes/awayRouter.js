const router = require('express').Router();
const pool = require('../modules/pool.js');

router.post('/submit', (req, res) => {
    let text = req.body.text;
    console.log('Text:', text);
    // console.log('/away/submit -- Recieving', req.body);
});

module.exports = router;