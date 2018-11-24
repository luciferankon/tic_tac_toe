//Initialize game boardData
const initBoardData = function(){
  return [ 
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ];
}

//Mark symbol into boardData
const markSymbol = function(position, symbol, boardData){
  let row = parseInt((position - 1) / 3);
  let column = (position - 1) % 3;
  boardData[row][column] = symbol;
  return boardData;
}
  
exports.initBoardData = initBoardData;
exports.markSymbol = markSymbol;
