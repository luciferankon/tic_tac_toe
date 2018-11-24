const assert = require('assert');
const {initBoard,
  placeSymbol
} = require('../src/lib.js');

describe('init board',function(){
  it('should return a 3x3 array containing all null values',function(){
    assert.deepEqual(initBoard(),[[null,null,null],[null,null,null],[null,null,null]]);
  });
});

describe('place symbol',function(){
  let board;
  beforeEach(function(){
    board = [[null,null,null],[null,null,null],[null,null,null]];
  });

  it('should return a 3x3 array with specified symbol at the specified position',function(){
    assert.deepEqual(placeSymbol(2, "X", board), [[null,"X",null],[null,null,null],[null,null,null]]);
  });

  it("should change original array", function(){
    assert.deepEqual(placeSymbol(2, "X", board), [[null,"X",null],[null,null,null],[null,null,null]]);
    assert.deepEqual(placeSymbol(5, "X", board), [[null,"X",null],[null,"X",null],[null,null,null]]);
    assert.deepEqual(placeSymbol(8, "X", board), [[null,"X",null],[null,"X",null],[null,"X",null]]);
  });
});
