const express = require('express')
const { createPool } = require('mysql');
const router = express.Router()
const otpGenerator = require('otp-generator')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "kasingodb",
    connectionLimit: 100
});
var authenticationResult = 0
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
    const otpGenerated = optAuthentication()
    pool.query(`INSERT INTO useraccount(PhoneNumber, validCode) VALUES(?,?)`,
        [phoneNumber, otpGenerated],
        (err, result) => {
            if (!!err) return console.log('Error on inserting')
            console.log(otpGenerated)
            authenticationResult = 0
            pool.query(`SELECT * FROM useraccount WHERE phoneNumber = ?`,
            [phoneNumber],(err, result) => {
                if (!!err) return console.log('Error on inserting')
                if (result != '') {
                    console.log('already account is registered(reg ->login req.) ')
                    console.log(result)
                    res.send(result)
                }
            })
        })
}
router.post('/', (req, res) => {
    const phoneNumber = req.body.completePhone
    console.log(phoneNumber)
    
    pool.query(`SELECT * FROM useraccount WHERE phoneNumber = ? `,
        [phoneNumber],
        (err, result) => {
            if (!!err) return console.log('Error on selecting' + err)
            if (result != '') {
                console.log('already account is registered(login req.) ')
                const otpGenerated = optAuthentication()
                setOtpdb(otpGenerated, phoneNumber)
                console.log(otpGenerated)
                authenticationResult = 1
                result[0].validCode = otpGenerated
                result[0].Loginresult = authenticationResult
                console.log(result[0])
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