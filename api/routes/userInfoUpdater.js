const express = require('express')
const { createPool } = require('mysql');
const { route } = require('./dbAuthentication');
const router = express.Router()

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "kasingodb",
    connectionLimit: 100
});

router.post('/', (req, res, err) => {
    var userName = req.body.userName
    var completePhone = req.body.completePhone
    console.log('req is working')
    console.log('un and phone ' + userName + completePhone)
    pool.query(`UPDATE useraccount SET userName = ? WHERE phoneNumber = ?`,
    [userName, completePhone], (err, result) => {
        if(!!err) console.log('error on updating the username')
            console.log('finished updating' + result)
            pool.query(`SELECT * FROM useraccount WHERE phoneNumber = ?`, 
            [completePhone], (err, result) => {
                if(!!err) console.log('error on retriving data after update profile')
                console.log(result)
                res.send(result);
        })
    })
    // if(!!err) console.log('error on the userinfoUpdater:- ' + err)
})

router.get('/', (req, res) => {
    res.end("API is working successfully update");
})

module.exports = router
