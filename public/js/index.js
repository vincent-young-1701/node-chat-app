console.log("/public/js/index.js loaded");

var socket = io();

socket.on('newMessage', (message) => {
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);
  jQuery('#messages').append(li);
});

socket.on('newLocationMessage', (message) => {
  var li = jQuery('<li></li>');
  var a = jQuery(`<a target="_blank">My Current Location</a>`);
  li.text(`${message.from}: `);
  a.attr("href", message.url);
  li.append(a);
  jQuery('#messages').append(li);
});

jQuery("#message-form").on('submit', (e) => {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  });
});

var locationButton = jQuery("#send-location");

locationButton.on('click', (e) => {
  if(!navigator.geolocation) {
    return alert('Geolocation not supported.');
  }
  navigator.geolocation.getCurrentPosition((position) => {
  
    socket.emit('createLocationMessage', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }, (message) => {
      console.log(message);
    });

  }, (err) => {
    alert(`Error: ${err.message}`);
  })
});