/* Generic Javascript Array and CSV functions */
/* 21/10/2018 */

const arrayIntersec = (array1 = [], array2 = []) => array1.filter(value => -1 !== array2.indexOf(value));

function returnFieldfromMatrix(matrix, wantedField, conditionField, conditionValue) {
    let matchedArray = [];
    for (let i = matrix.length; i--;)(matrix[i][conditionField] === conditionValue) ? matchedArray.push(matrix[i][wantedField]) : false
    return matchedArray;
}

function removeFromArray(myArray, element) {
    for (let i = myArray.length; i--;)(myArray[i] === element) ? myArray.splice(i, 1) : false
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    const color = [ '#',...Array(6).fill(0).map(() => letters[Math.floor(Math.random() * 16)])]
    return color.join('')
}


// returns some blank arrays in the mix, needs refactor
Array.prototype.toChunks = function(num) {
    // check for breaking cases
    if (num < 1) return arr
    //if (!Array.isArray(arr)) return arr ?if not used as prototype
    num = Math.floor(num)
     
    const len = this.length
    const tempArr = Array(num - 1).fill(null)
    const parts = [0, ...tempArr.map((x, i) => Math.floor(len / (num / (i + 1))))]
    const chunks = parts.map((x, i) => arr.slice(parts[i], parts[i + 1]))

    return chunks
}

// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr = Array(10).fill(null).map((x, i) => i + 1 ) 

const arr2 = arr.toChunks(2)
/*
*(2) [Array(5), Array(5)]
*	0: (5) [1, 2, 3, 4, 5]
*	1: (5) [6, 7, 8, 9, 10]
*/
