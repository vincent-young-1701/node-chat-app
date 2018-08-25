var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var message = generateMessage('Admin', 'hello');
    expect(message.from).toBe('Admin');
    expect(message.text).toBe('hello');
    expect(typeof message.createdAt).toBe('number');
  });
});