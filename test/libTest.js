const assert = require('assert');
const {initBoardData,
  markSymbol,
  printBoard
} = require('../src/lib.js');

describe('init boardData data',function(){
  it('should return a 3x3 array containing all null values',function(){
    assert.deepEqual(initBoardData(),[[null,null,null],[null,null,null],[null,null,null]]);
  });
});

describe('mark symbol',function(){
  let boardData;
  beforeEach(function(){
    boardData = [[null,null,null],[null,null,null],[null,null,null]];
  });

  it('should return a 3x3 array with specified symbol at the specified position',function(){
    assert.deepEqual(markSymbol(2, "x", boardData), [[null,"x",null],[null,null,null],[null,null,null]]);
  });

  it("should change original array", function(){
    assert.deepEqual(markSymbol(2, "x", boardData), [[null,"x",null],[null,null,null],[null,null,null]]);
    assert.deepEqual(markSymbol(5, "x", boardData), [[null,"x",null],[null,"x",null],[null,null,null]]);
    assert.deepEqual(markSymbol(8, "x", boardData), [[null,"x",null],[null,"x",null],[null,"x",null]]);
  });
});
