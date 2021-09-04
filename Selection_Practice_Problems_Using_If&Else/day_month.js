const prompt = require('prompt-sync')();

const day = prompt('Enter the day: ');
const month = prompt('Enter the month: ');

if ( (month <= 6 && day <= 20) && (month >= 3 && day >= 20) && (day < 31) ) {
    console.log("True");
}
else {
    console.log("False");
}