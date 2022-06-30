const express = require('express')
const router = express.Router()
const fs = require("fs");
const { element, exact } = require('prop-types');
const readline = require("readline");
const { route } = require('./dbAuthentication');
const stream = fs.createReadStream("./routes/boards/generatedBoard.csv");
const reader = readline.createInterface({ input: stream });

let data = [];
let boards = [];
let takenBoars = 0

reader.on("line", (row) => {
    data.push(row.split(","));
});

reader.on("close", () => {
    boards = data.filter(element => { if (element.length >= 2) return element })
    console.log(boards);
});

router.post('/' , (req, res) => {
    let board = []
    let end = takenBoars + 4
    let start = takenBoars
    for (let i = start; i <= end; i++) {
        takenBoars += 1;
        board.push(boards[i])
    }
    console.log('takenBorads: ' + takenBoars)
    console.log(board)
    res.send(board)
})
router.get('/', (req, res) => {
    res.send('Serving players')
})

module.exports = router;