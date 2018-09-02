const util = require('../../api/sample/util.js');

test('Add two numbers', () => {
  expect(util.sum(1, 2)).toBe(3);
  expect(util.sum(1, -1)).toBe(0);
  expect(util.sum(1, -1)).not.toBeNull();
});
