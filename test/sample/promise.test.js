const promise = require('../../api/sample/promise');

test('Test promise resolve of new phone, good response', () => promise
  .willIGetNewPhone(true)
  .then((data) => {
    expect(data).toEqual({ make: 'Android' });
  }));

test('Test promise resolve of new phone, bad response', () => promise
  .willIGetNewPhone(true)
  .then((data) => {
    expect(data).not.toEqual({ make: 'Android1' });
  }));


test('Test promise reject of new phone', () => promise
  .willIGetNewPhone(false)
  .catch((error) => {
    expect(error.message).toBe('Mom is not happy');
  }));
