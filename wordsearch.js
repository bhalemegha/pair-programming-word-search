const transpose = function (matrix) {
    let newMatrix = [];
    let matrixLength = matrix[0].length;
  
    for (let i = 0; i < matrixLength; i++) {
      newMatrix.push([]);
    }
  
    matrix.forEach((array, arrIndex) => {
      array.forEach((element, elIndex) => {
        //swapping arrIndex with elIndex
        newMatrix[elIndex][arrIndex] = element;
      });
    });
  
    return newMatrix;
  };

  

const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    // console.log(verticalJoin);

    
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    for(const v of verticalJoin) {
        if (v.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch