const assert = require('assert');
const {isSubset} = require('../src/utilLib.js');

describe('is subset', function() {
  it('should return true when all values are subset of super set', function() {
    assert.equal(isSubset([1,2,3], [1,2,3]), true);
  });
});
