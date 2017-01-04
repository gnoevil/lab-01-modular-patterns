'use strict';

module.exports = exports = {};

exports.helloFriend = function(name){
  if (!name) throw new Error('Name not provided.');
  console.log('Hello friend, your name is: ' + name);
  return 'Hello friend, your name is: ' + name;
};
