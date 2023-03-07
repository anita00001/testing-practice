const stringLength = require('./Length.js');

test('Length of String is equal to', () => {
  expect(stringLength('HeyThere')).toBe(8);
});

test('Length of String is equal to', () => {
  expect(stringLength('Anita')).toBe(5);
});

test('Length of String is equal to', () => {
  expect(stringLength('sharma')).toBe(6);
});