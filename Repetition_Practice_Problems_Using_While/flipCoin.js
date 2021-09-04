let MAXCOUNT = 11;
let countHead = 1;
let countTail = 1;
let i = 1;
let j = 1;

while( (i <= MAXCOUNT) && (j <= MAXCOUNT)) {
    let randomNumber = Math.floor ( Math.random() * 2 );

    if ( randomNumber == 0 ) { 
        console.log("Heads");
        while ( countHead <= MAXCOUNT ) {   
            i++;    
            countHead++;
            break;
        }
    }
    else {
        console.log("Tails");
        while ( countTail <= MAXCOUNT ) {
            j++;
            countTail++;
            break;
        }
    }
}
