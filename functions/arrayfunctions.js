/* Generic Javascript Array and CSV functions */
/* 21/10/2018 */

const csvToArray = (csvEntry, csvDelimiter = ",") => csvEntry.split(csvDelimiter);

const setFromArray = (mySet = []) => Array.from(new Set(mySet));

const changeParsers = (myArray = [], delim = ";") => myArray.toString().replace(/,/g, delim);

const arrayIntersec = (array1 = [],array2 = []) => array1.filter(value => -1 !== array2.indexOf(value));