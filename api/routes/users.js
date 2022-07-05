var express = require('express');
const { Socket } = require('socket.io');
var router = express.Router();
var http = require('http').createServer(this.router)
var io = require('socket.io')(http)
/* GET users listing. */

io.on('connection', () => {
  console.log('a user connected')
  Socket.on('disconnect', () => {
    console.log('a user disconnected')
  })
})
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;