const reverseString = require('./reverse.js')

test('String is reversed', () => {
  expect(reverseString('Anita')).toBe('atinA');
});