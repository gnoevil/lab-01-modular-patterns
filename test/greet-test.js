'use strict';

const chai = require('chai');
const greet = require('../lib/greet.js');
const expect = chai.expect;

describe('testing greet module', function(){
  describe('valid inputs', function() {
    it('should return "Hello friend, your name is: gnoevil"', function() {
      expect(greet.helloFriend('gnoevil')).to.equal('Hello friend, your name is: gnoevil');
    });
  });
  describe('invalid inputs', function(){
    it('should throw a missing name error', function() {
      expect(greet.helloFriend).to.throw(Error);
    });
  });
});
