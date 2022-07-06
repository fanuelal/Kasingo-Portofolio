var express = require('express');
var router = express.Router();
var http = require('http').Server(router)
var io = require('socket.io')(http)
/* GET users listing. */

var counter = 0
io.on('connection', (socket) => {
  counter++;
  console.log('a user connected')
})
// router.get('/', (req, res, next) => {
//   res.send('respond with a resource');
// });

// http.listen(8000, () => {
//   console.log('accepting connection on socket.io')
// })

module.exports = router;