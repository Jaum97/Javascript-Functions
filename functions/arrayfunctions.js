/* Generic Javascript Array and CSV functions */
/* 21/10/2018 */

const csvToArray = (csvEntry, csvDelimiter = ",") => csvEntry.split(csvDelimiter);

const setFromArray = (mySet = []) => Array.from(new Set(mySet));

const changeParsers = (myArray = [], delim = ";") => myArray.toString().replace(/,/g, delim);

