'use strict';

const expect = require('chai').expect;
const greet = require('../lib/greet.js');

describe('testing greet module', function(){
  describe('valid inputs', function() {
    it('should return "Hello gnoevil"', function(){
      expect(greet('gnoevil')).to.equal('Hello gnoevil');
    });
  });
  describe('invalid inputs', function(){
    it('should throw a missing name error', function() {
      expect(greet(13)).to.throw(Error);
    });
  });
});
