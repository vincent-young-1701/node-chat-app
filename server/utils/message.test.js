var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var message = generateMessage('Admin', 'hello');
    expect(message.from).toBe('Admin');
    expect(message.text).toBe('hello');
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    const lat = "36.9762022";
    const lon = "-122.0267384000000";
    var message = generateLocationMessage('Admin', lat, lon);
    expect(message.from).toBe('Admin');
    expect(message.url).toBe(`http://google.com/maps?q=${lat},${lon}`);
    expect(typeof message.createdAt).toBe('number');
  });
});