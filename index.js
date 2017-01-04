'use strict';

const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');
const main = module.exports = function(){
  var name = process.argv[2] || 'gnoevil';
  return greet.helloFriend(name);
};
console.log(main());

greet.helloFriend('gnoevil');
arithmetic.add(2,4);
arithmetic.sub(2,4);
