const capitalize = require('./capitalize');

test('Capitalize the first character of string', () => {
  expect(capitalize('hello')).toBe('Hello')
});