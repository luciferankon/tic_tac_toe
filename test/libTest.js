const assert = require('assert');
const {initBoardData,
  markSymbol,
  generateBoard
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

describe('generate Board ', function(){
  let hyphens = '\n-----------\n'; 
  let expectedOutput = " 1 | 2 | 3 " + hyphens + " 4 | 5 | 6 " + hyphens + " 7 | 8 | 9 ";
  it('should return a board with given board data', function(){
    assert.equal(generateBoard([[1,2,3],[4,5,6],[7,8,9]]),expectedOutput);
  });
});
