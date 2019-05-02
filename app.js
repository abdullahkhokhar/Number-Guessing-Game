// Game values
let min = 1, max = 10, winningNum = getRandomNumber(min,max), guessesLeft = 3;
// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');
const guessBtn = document.querySelector('#guess-btn');

// Assign the UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listner
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

//create event listner for the button
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  // validate
  if(isNaN(guess) || guess < min || guess > max){
    // WE WANT TO SET A MSG
    setMessage(`Please enter a number between the range: ${min} and ${max}`, 'red');
  }

  // check if you win
  if(guess == winningNum){
    // disble guessInput
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = 'green';
    // tell the user they one
    setMessage(`You have won, the winning number ${winningNum} is correct`, 'green');
    guessBtn.value = "Play Again";
    guessBtn.className += 'play-again';
  } else {
    // the number the entered was wrong
    // decrement counter and set the message
    guessesLeft -= 1;
    if(guessesLeft === 0){
      // game is over and they lost
      guessInput.disabled = true;
      guessInput.style.borderColor = 'red';
      setMessage(`You have lost! The correct number was ${winningNum} is correct`, 'red');

    } else {
      guessInput.style.borderColor = 'purple';
      guessInput.value = '';
      // game continuous, answer was wrong
      setMessage(`guess is not correct, number of gueesses left are: ${guessesLeft}`, 'purple');
    }
  }
});

//Set Message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}

function getRandomNumber(min, max){
  // random number between min and max
  return Math.floor(Math.random()*((max-min+1)+min));
}
