const express =  require('express')
const app = express()
const PORT  = 3000

const router = express.Router();

router.get('/login', function (req, res, next) {
    console.log("Login page");
    res.end();
});

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log('running on port', PORT);
})