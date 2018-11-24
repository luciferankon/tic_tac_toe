//Initialize game board
const initBoard = function(){
  return [ 
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ];
}

//Insert symbol into board
const placeSymbol = function(position, symbol, board){
  let row = parseInt((position - 1) / 3);
  let column = (position - 1) % 3;
  board[row][column] = symbol;
  return board;
}
  
exports.initBoard = initBoard;
exports.placeSymbol = placeSymbol;
