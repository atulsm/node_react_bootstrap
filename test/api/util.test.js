const util = require('../../api/util.js');

test('Add two numbers', () => {
  expect(util.sum(1, 2)).toBe(3);
});
