const express = require('express')
const { route } = require('./dbAuthentication')
const router = express.Router()


router.post('/', (req, res) => {
    res.send('server is live ')
    let lotedNum = []
    let generated = 0
    setInterval(() => {
    generated = Math.floor(Math.random() * 74)
    lotedNum.push(generated)
    console.log(generated)
    res.send(generated)
    }, 5000); 
})

router.get('/', (req, res) => {
    res.send('picking Numbers')
})

module.exports = router

