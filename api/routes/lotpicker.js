const express = require('express')
const { route } = require('./dbAuthentication')
const router = express.Router()


router.post('/', (req, res) => {
    let lotedNum = []
    let generated = 0
    generated = Math.floor(Math.random() * 75)
    lotedNum.push(generated)
    console.log(generated)
    res.send(Ison.stringify(generated));
})

router.get('/', (req, res) => {
    res.send('picking Numbers')
})

module.exports = router

