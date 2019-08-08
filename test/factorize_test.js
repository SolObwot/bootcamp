const assert = require('chai').assert;
const factorial = require('../factorize');

describe('Factorial', function() {
    it('Factorial of 0 should be 1', function() {
      assert.equal(factorial(0), 1);
    });
    it('Factorial of 1 should be 1', function() {
      assert.equal(factorial(1), 1);
    });
    it('Factorial of 3 should be 6', function() {
      assert.equal(factorial(3), 6);
    });
  });
