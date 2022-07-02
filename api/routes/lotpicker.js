const express = require('express')
const router = express.Router()


router.post('/', (req, res) => {
    let lotedNum = []
    let generated = 0
    // let completePhone = req.body.completePhone
    
    generated = Math.floor(Math.random() * 75)
    lotedNum.push(generated)
    console.log(generated)
    res.status(200).send((generated).toString());
    // res.send();
}
)

router.get('/', (req, res) => {
    res.send('picking Numbers')
})

module.exports = router

