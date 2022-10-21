//user points
let points = 0
//range
let Range = 2;
//username
const username = prompt("What is your username")
// print username
document.querySelector('#user').innerHTML = username

function game(range = Range){
    //random Num
    let random = Math.floor(Math.random() * range) * 1
    //prompt
    let userGuess = prompt(`Hello ${username}, can you guess the generated number?`)
    //stop execution if user cancels the prompt
    if(!userGuess) return false;
    if(Number(userGuess) === random){
        //user's points
        points++;
      //  print they user score
        document.querySelector('#score').innerHTML = points
        //next level
        Range++;
        alert(`Your guess is correct. You have ${points} point(s)`)
    }else if(Number(userGuess) !== random){
        alert(`Your guess is wrong. Try again?`)
    }

    game();
}

game()