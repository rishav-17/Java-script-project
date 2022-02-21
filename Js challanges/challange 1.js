//alert('Hello!')
//console.log('hello!');

//age in days
function ageindays(){
var birthyear = prompt('What year you were born my friend? ');
var presentyear =prompt('what is the year going mate? ');
var age = (presentyear-birthyear)*365;
var h1 = document.createElement('h1');
var textanswer = document.createTextNode('You are ' + age + 'days old bukaroo!!' );
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
    image.src ="https://c.tenor.com/GZo3q_VkgVcAAAAC/cute-laughing-cat.gif";
    div.appendChild(image);
}
function resetcat(){
    alert('This will permanently delete cat generator and you have to refresh the page to get it back!')
    document.getElementById('cat').remove();
}

//stone paper scissor
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
    result = 'Gave a good competiton!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'You won'
  }
  else if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'You lost'
  }
  else if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'YOU won'
  }
  else if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'You lost'
  }
  else if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'You won'
  }
  else if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'You lost'
  }
  resultDisplay.innerHTML = result
}