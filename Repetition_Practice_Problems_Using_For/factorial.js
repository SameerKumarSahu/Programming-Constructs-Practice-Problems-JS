const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a number: '));
let fact = 1;

for ( i = 2; i <= number; i++ ) {
    fact = fact * i;
}
console.log(`Factorial of the ${number} is : ` +fact);