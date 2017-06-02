global.Promise = require('bluebird');

global.Promise.resolve('fdsadfs').then((s) => {
  console.log(s);
})

module.exports = {
  test() {
    console.log('ok');
  }
}