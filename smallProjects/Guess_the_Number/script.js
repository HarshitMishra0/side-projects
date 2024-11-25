
let secretNumber = Math.trunc(Math.random() * 19) + 1;
let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

  if(guess===secretNumber){
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Congrats on selecting the Correct Number!!'

    document.querySelector('body').style.backgroundColor = 'green'
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('.number').style.width = '30rem'

    if(highScore<score){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore
    }
}else if(!guess || guess>=20){
  document.querySelector('.message').textContent =
    'Enter a valid number';
}else if(guess !== secretNumber){
  document.querySelector('.message').textContent = guess > secretNumber ? "Too high" : "Too Low";
  score--;
  document.querySelector('.score').textContent = score;
  if(score==0){
    document.querySelector('.message') = "You'have lost the game!!"
  }
}
})

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 19) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = "Start guessing..."
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').textContent = "?"
  document.querySelector('.guess').value = ''
})


