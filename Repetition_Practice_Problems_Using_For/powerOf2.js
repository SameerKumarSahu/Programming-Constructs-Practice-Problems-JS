const prompt = require('prompt-sync')();

const number = prompt('Enter the value of n: ');

for ( i = 0; i <= Number(number); i++ ) {
    console.log(Math.pow(2, i));
}