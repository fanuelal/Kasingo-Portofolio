const express = require('express');
const { createPool } = require('mysql');
const cors = require('cors');
const PORT = 4000

const app = express()
app.use(cors())
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "kasingodb",
    connectionLimit: 100 
});

app.get('/', function (req, res) {
    (err) => {
        if(err) throw err;
    }   
    pool.query(`SELECT phoneNumber FROM useraccount WHERE phoneNumber = ?`,['+55787364'], (err, result, field) => {
        if(err) return res.send('error on selecting the phoneNUmber')
        if(result != '') return res.json(result)
        else{
        res.send('data is not there. Start Registering')
        try{
        pool.query(`INSERT INTO useraccount(PhoneNumber) VALUES(?)`,['+55787364'], (err, newResult, field) => {
            if(!!err) return console.log('error on inserting')
            return res.send(newResult)
        })
    }
    catch(err){
        console.log('error on registration')
    }
    }
    })
})

app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`)
})

