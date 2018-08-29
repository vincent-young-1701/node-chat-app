var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  }
};

var generateLocationMessage = (from, lat, lon) => {
  return {
    from,
    url: `http://google.com/maps?q=${lat},${lon}`,
    createdAt: new Date().getTime()
  }
};

module.exports = {generateMessage, generateLocationMessage};