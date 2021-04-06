const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail("tes@gmail"));
// console.log(validator.isMobilePhone("123123123", "id-ID"));
// console.log(validator.isNumeric("123"));

// console.log(chalk.italic.black.bgBlue("Hello"));
const pesan = chalk`Lorem qui ipsum {bgRed.black deserunt ea} minim {bgGreen.italic.black ad deserunt}.`;
console.log(pesan);
