/* Generic Javascript Array and CSV functions */
/* 21/10/2018 */

const csvToArray = (csvEntry, csvDelimiter = ",") => csvEntry.split(csvDelimiter);

const setFromArray = (mySet = []) => Array.from(new Set(mySet));

const changeParsers = (myArray = [], delim = ";") => myArray.toString().replace(/,/g, delim);

const arrayIntersec = (array1 = [], array2 = []) => array1.filter(value => -1 !== array2.indexOf(value));

function doubleCSVtoMatrix(csvInput, delim1, delim2) {
    let array1 = csvToArray(csvInput, delim1);
    let matrix = [];
    for (let i = array1.length; i--; matrix[i] = csvToArray(array1[i], delim2)) { }
    return matrix;
}

function returnFieldfromMatrix(matrix, wantedField, conditionField, conditionValue) {
    let matchedArray = [];
    for (let i = matrix.length; i--;)(matrix[i][conditionField] === conditionValue) ? matchedArray.push(matrix[i][wantedField]) : false
    return matchedArray;
}

function removeFromArray(myArray, element) {
    for (let i = myArray.length; i--;)(myArray[i] === element) ? myArray.splice(i, 1) : false
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
}