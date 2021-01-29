const chalk = require("chalk");

const text = "Hello from data.js";

module.exports = text;

console.log(chalk.greenBright(JSON.stringify(exports)));
console.log(chalk.greenBright(__filename));
