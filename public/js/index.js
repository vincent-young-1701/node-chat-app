console.log("/public/js/index.js loaded");

var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'kristen@sexy.com',
    text: 'Stop be too sexy.'
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', (message) => {
  console.log('message', message);
});