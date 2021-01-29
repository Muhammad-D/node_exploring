const path = require("path");
const chalk = require("chalk");
const text = require("../data");

const chalkWr = (text) => chalk.bgGreen(text);

const fileName = path.basename(__filename);
const fileDir = path.dirname(__filename);
const fileExt = path.extname(__filename);
const filePar = path.parse(__filename);

console.log(path.parse(__filename).name);

console.log("File name is ", chalkWr(fileName));
console.log("File directory is ", chalkWr(fileDir));
console.log("File extantion is ", chalkWr(fileExt));
console.log("Parse", chalkWr(JSON.stringify(filePar)));

console.log(path.join(__dirname, "server", "index", ".."));
