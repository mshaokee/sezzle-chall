const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    console.log('in /history GET');
    let queryString = `SELECT * FROM "history"`;
    //order by most recent 10 later
    pool.query(queryString).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        alert('Error in GET history');
        console.log(error);
        res.sendStatus(500);
    })
});//end get

// POST
router.post('/', (req, res) => {
    console.log('in /history POST', req.body);
    let history = req.body.history;
    let queryString = `INSERT INTO "history" ("history")
                        VALUES ($1)`;
    pool.query(queryString, [history]).then((result) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
    });//end pool
});//end post


module.exports = router;