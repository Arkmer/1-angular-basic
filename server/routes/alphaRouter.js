const router = require('express').Router();
const pool = require('../modules/pool.js');

router.post('/postText', (req, res)=>{
    console.log('/postText -- Text:', req.body.text);
    pool.query('insert into basic (text) values ($1)', [req.body.text])
    .then(function(result){
        res.sendStatus(201)
    })
    .catch(function(error){
        res.sendStatus(500);
    })
})

router.get('/getText', (req, res)=>{
    console.log('/getText');
    pool.query('select * from basic order by id;')
    .then(function(result){
        console.log('/getText -- Response:', result.rows);
        res.send(result.rows)
    })
    .catch(function(error){
        res.sendStatus(500);
    })
})

module.exports = router;