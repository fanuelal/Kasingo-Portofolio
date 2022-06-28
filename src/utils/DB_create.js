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

const register = () => {
    pool.query(`INSERT INTO useraccount(PhoneNumber) VALUES(?)`,['+25223244'], (err, result, field) => {
        if(err) return console.log(err)
        return console.log(result)
    })
}
const checkRegistred = () =>{
    pool.query(`SELECT phoneNumber FROM useraccount WHERE phoneNumber = ?`,['+25223244'], (err, result, field) => {
        if(err) return console.log(err)
        if(result != '') return console.log(`data already exist ${result}`)
        console.log('data is not there registering')
        register()
    })
}

app.get('/', function (req, res) {
    (err) => {
        if(err) throw err;
    }
   res.send('successfully getting');
})
checkRegistred();
app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`)
})

