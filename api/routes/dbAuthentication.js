const express = require('express')
const { createPool } = require('mysql');
const router = express.Router()


const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "kasingodb",
    connectionLimit: 100
});

router.post('/', (req, res) => {
    const phoneNumber = req.body.completePhone
    console.log(phoneNumber)
    let Loginresult = false
    pool.query(`SELECT userId FROM useraccount WHERE phoneNumber = ? `,
        [phoneNumber],
        (err, result) => {
            if (!!err) return console.log('error on inserting')
            if (result != '') {
                console.log('already account is registered ')
                res.json(result)
                console.log(result)
            }
            else {
                register(res, phoneNumber)
            }
        })

})
register = (res, phoneNumber) => {
    pool.query(`INSERT INTO useraccount(PhoneNumber) VALUES(?)`,
        [phoneNumber],
        (err, result) => {
            if (!!err) return console.log('error on inserting')
            console.log(result)
            return res.json(result)
        })
}
router.get('/', (req, res) => {
    res.send("API is working successfully");
})

module.exports = router