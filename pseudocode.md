# Pseudocode for the psychic algorithm

input integer from 0-100
let numberGuess;

let Choice ;
let guesses = [];
let totalAns;

class Question 

from question 1 to question 10: 

1st question:
    if yesbutton === pressed;
        Choice += 2
    elif nobutton === pressed;
        Choice += 1;
    elif Misc === pressed;
        Choice += 3;
    push Choice => guesses array

question++

    //store the ints from ans into the array


if all the answers are answered
    clearCanvas
    calculateGuess()

calculateGuess ()
    numberGuess = (q1 * weight1) + (q2 * weight2) ... (q10 * w10)

    print(userNum) 
    print(numberGuess)
