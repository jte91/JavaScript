
lower = 1
upper = lower + 1;

// let myRandom = Math.floor(Math.random() * (upper - lower + 1)) + lower;
// console.log(myRandom);
// console.log("Guess a number between 1 and 10: ");
// const readline = require('readline');

// if(input = myRandom)
// {
//    console.log("Good Job!");
// }
// else
// {
//     console.log("Not matched");
// }


function guess(num)
{
    
    let pick = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    console.log(pick);
    if(num == pick)
    {
        return 0;
    }
    else if(num < pick)
    {
        return 1;
    }
    else 
    {
        return -1;
    }
}

console.log(guess(1))