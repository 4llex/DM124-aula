const chalk = require('chalk');
const string = require('useful-string');

const names = [
    'Alex Rafael Silva Rosa',
    'ário Guilherme Macedo',
    'Filipe Henrique Benjamim de Arruda',
    'Iury da Rocha Miguel'
]

const byAlphabeticalOrder = (wordA, wordB) => 
  ('' + wordA).localeCompare(wordB)

var num = 0;
const print = (name,index) => {
    if (index%2 == 0) {
        console.log(chalk.default.blue(name));
    } else {
        console.log(chalk.default.yellow(name));
    }
    num++;
}
names 
    .sort(byAlphabeticalOrder)
    .map(string.underscore)
    .forEach(print);

