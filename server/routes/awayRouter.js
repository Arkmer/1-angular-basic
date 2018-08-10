const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');
router.post('/submit', (req, res) => {
    console.log('/away/submit -- Recieving');
})

module.exports = router;