const {winningConditions} = require('./constants.js');
const {justifiedCells} = require('./utilLib.js');

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

//justifies each cell
//move to utilLib
const justifyCell = function(cell) {
  if (cell == null) {
    return '   ';
  }
  return ' ' + cell + ' ';
};

//generating the board structure
const generateBoard = function(boardValues) {
  let board = [];
  for (let row = 0; row < 3; row++) {
    let justifiedCells = boardValues[row].map(justifyCell).join('|');
    board.push(justifiedCells);
  }
  return board.join('\n-----------\n');
};

exports.generateBoard = generateBoard;
exports.initBoardData = initBoardData;
exports.markSymbol = markSymbol;
