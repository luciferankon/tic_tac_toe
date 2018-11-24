const isSubset = function(superSet, subset) {
 const isIncluded = function(item){
   return superSet.includes(item);
 }
 return subset.every(isIncluded);
}


//justifies each cell
const justifyCell = function(cell) {
  if (cell == null) {
    return '   ';
  }
  return ' ' + cell + ' ';
};

exports.isSubset = isSubset;
exports.justifyCell = justifyCell;
