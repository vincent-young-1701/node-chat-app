const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3001;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.emit('newMessage', {
    from: 'kristin@sexy.com',
    text: 'Hey, sexy.',
    createdAt: 69
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});