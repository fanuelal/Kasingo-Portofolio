const express = require('express')
const { createPool } = require('mysql');
const cors = require('cors');

const router = express.Router()
const otpGenerator = require('otp-generator')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "kasingodb",
    connectionLimit: 100
});
const optAuthentication = () => {
    const genratedOtp = otpGenerator.generate(6, { upperCaseAlphabets: false })
    return genratedOtp
}
const setOtpdb = (otpGenerated, phoneNumber) => {
    pool.query(`UPDATE useraccount SET validCode = ? WHERE phoneNumber = ?`,
        [otpGenerated, phoneNumber],
        (err, result) => {
            if (!!err) return console.log('error on inserting')
            return console.log(result)
        })
}
register = (res, phoneNumber) => {
    pool.query(`INSERT INTO useraccount(PhoneNumber) VALUES(?)`,
        [phoneNumber],
        (err, result) => {
            if (!!err) return console.log('error on inserting')
            res.send(result)
            console.log(result)
        })
}
router.post('/', (req, res) => {
    const phoneNumber = req.body.completePhone
    console.log(phoneNumber)
    let Loginresult = false
    pool.query(`SELECT * FROM useraccount WHERE phoneNumber = ? `,
        [phoneNumber],
        (err, result) => {
            if (!!err) return console.log('error on inserting')
            if (result) {
                console.log('already account is registered(login req.) ')
                const otpGenerated = optAuthentication()
                setOtpdb(otpGenerated, phoneNumber)
                console.log(otpGenerated)
                res.send(result)
            }
            else {
                register(res, phoneNumber)
            }
        })

})

router.get('/', (req, res) => {
    res.send("API is working successfully");
})

module.exports = router