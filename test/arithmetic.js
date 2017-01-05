'use strict';

const expect = require('chai').expect;
const arithmetic = require('../lib/arithmetic.js');

describe('testing module arithmetic.js', function() {
  it('should return a number', function (){
    expect(arithmetic).to.equal.number;
  });
});
