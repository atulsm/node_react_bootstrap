// Sample javascript to demo promise
// From https://scotch.io/tutorials/javascript-promises-for-dummies

// Defining a promise
const willIGetNewPhone = isMomHappy => new Promise((resolve, reject) => {
  if (isMomHappy) {
    const newPhone = { make: 'Android' };
    resolve(newPhone);
  } else {
    const error = new Error('Mom is not happy');
    reject(error);
  }
});

module.exports = {
  willIGetNewPhone,
};

/* Using a promise
willIGetNewPhone(true)
  .then(data => console.log(data))
  .catch(error => console.log(error));

willIGetNewPhone(false)
  .then(data => console.log(data))
  .catch(error => console.log(error.message));
*/
