const assert = require('assert');
const lib = require('../src/lib.js');

describe('init board',function(){
    it('should return a 3x3 array containing all null values',function(){
          assert.deepEqual(lib.initBoard(),[[null,null,null],[null,null,null],[null,null,null]]);
        });
});
