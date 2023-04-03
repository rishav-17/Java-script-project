//alert('Hello!')
//console.log('hello!');

//age in days
function ageindays(){
var birthyear = prompt('What year you were born? ');
var presentyear =prompt('what is the year going? ');
var age = (presentyear-birthyear)*365;
var h1 = document.createElement('h1');
var textanswer = document.createTextNode('You are ' + age + 'days old my friend!' );
h1.setAttribute('id', 'ageindays');
h1.appendChild(textanswer);
document.getElementById('flex-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageindays').remove();
}

//cat generator
function generatecat(){
    var image = document.createElement('img');
    var div = document.getElementById('cat');
    image.src ="http://edgecats.net/";
    div.appendChild(image);
}
function resetcat(){
    alert('This will permanently delete cat generator and you have to refresh the page to get it back!')
    document.getElementById('cat').remove();
}

//Stone, paper and scissors game.
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'you win!'
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'you lost!'
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'you win!'
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
}
