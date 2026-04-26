# Pseudocode for the psychic algorithm

input integer from 0-100
let numberGuess;

let Choice ;
let guesses = [];
let totalAns;

class Question 

for each question:
    if yes/no type question;
        if yesbutton === pressed;
            Choice = 2
        if nobutton === pressed;
            Choice = 1;

    if starbucks type question;
        if tall === pressed;
            Choice = 1;
        if grande === pressed;
            Choice = 2;
        if venti === pressed;
            Choice = 3;

    if seasons type question;
        if fall === pressed;
            Choice = 1;
        if winter === pressed;
            Choice = 2;
        if spring === pressed;
            Choice = 3;
        if summer === pressed;
            Choice = 4;
   
    push Choice into guesses array

question++

    //store the ints from ans into the array


if all the answers are answered
    clearCanvas
    calculateGuess()

calculateGuess ()
    let q1 = guesses[0] ...
    let w = 1
    //weights are calculated through excel

    numberGuess = (q1 * weight1) + (q2 * weight2) ... (q10 * w10)

    print(userNum) 
    print(numberGuess)
