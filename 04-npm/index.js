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

const print = name => console.log(chalk.default.blue(name))

names 
    .sort(byAlphabeticalOrder)
    .map(string.underscore)
    .forEach(print);

