'use strict';

const chai = require('chai');
const main = require('../index.js');
const assert = chai.assert;

describe('testing main module', function(){
  describe('testing main with args', function(){
    before(() => {
      this.processArgvTwoBackup = process.argv[2];
      process.argv[2] = 'gnoevil';
    });

    after(() => {
      process.argv[2] = this.processArgvTwoBackup;
    });

    it('should return Hello friend, your name is: gnoevil', function(){
      assert.equal(main(), 'Hello friend, your name is: gnoevil', 'expected Hello friend, your name is: gnoevil');
    });
  });
});
