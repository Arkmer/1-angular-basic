const router = require('express').Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res)=>{
    pool.query('INSERT into basic (text) VALUES ($1)', [req.body.text])
    .then(function(result){
        res.sendStatus(201)
    })
    .catch(function(error){
        res.sendStatus(500);
    })
})

router.get('/', (req, res)=>{
    pool.query('SELECT * from basic ORDER BY id;')
    .then(function(result){
        res.send(result.rows)
    })
    .catch(function(error){
        res.sendStatus(500);
    })
})

router.delete('/:id', (req, res)=>{
    let id = req.params.id;
    pool.query(`DELETE from basic WHERE id = $1;`, [id])
    .then(function (result) {
        res.send(200);
    }).catch(function (error) {
        res.sendStatus(500);
    })
})

router.put('/', (req, res)=>{
    pool.query('UPDATE basic SET text = $1 WHERE id = $2',[req.body.edit, req.body.id])
    .then(function(result){
        res.sendStatus(200);
    }).catch(function(){
        res.sendStatus(500);
    })
})

module.exports = router;