//document.addEventListener('DOMContentLoaded',function(){


const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
const COLORS1=[
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black"
]
const COLORS2=[
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "yellow",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "yellow"
]
const COLORS3=[
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "yellow",
  "pink",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "yellow",
  "pink"
]
const COLORS4=[
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "yellow",
  "pink",
  "white",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "yellow",
  "pink",
  "white"
]
const COLORS5=[
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "yellow",
  "pink",
  "white",
  "violet",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "yellow",
  "pink",
  "white",
  "violet"
]
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
let shuffledColors1=shuffle(COLORS1);
let shuffledColors2=shuffle(COLORS2);
let shuffledColors3=shuffle(COLORS3);
let shuffledColors4=shuffle(COLORS4);
let shuffledColors5=shuffle(COLORS5);


// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.dataset.tr=color;
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
let hasFlippedCard=false;
let preventCheat=false;
let firstCard, secondCard;
function handleCardClick(event) {
  if(preventCheat) return;  
  if(event.target===firstCard) return;  
  const newClass=event.target.classList.add('clicked');
  if (!hasFlippedCard) {
    hasFlippedCard=true;
    firstCard=event.target;
    return;
  }
    secondCard=event.target;

    checkForMatch();
}
const scoreRec=document.querySelector('#score');
let score=0;
function checkForMatch(){
  if (firstCard.dataset.tr===secondCard.dataset.tr){
    disableCards();
    score+=100;
    scoreRec.innerText=`Score is ${score}`;
    return;
  }

unFlipCards();
}

function disableCards(){
  firstCard.removeEventListener('click',handleCardClick);
  secondCard.removeEventListener('click', handleCardClick);
  clearBoard();
}

function unFlipCards(){
  preventCheat=true;
  score-=10;
  scoreRec.innerText=`Score is ${score}`;

  setTimeout(()=>{
    firstCard.classList.remove('clicked');
    secondCard.classList.remove('clicked');
clearBoard();
  }, 1000);
}

function clearBoard (){
  
  hasFlippedCard = false;
  preventCheat = false;
  firstCard=null;
  secondCard=null;
}

// you can use event.target to see which element was clicked
//    console.log("you just clicked", event.target);
   


// when the DOM loads
const btn=document.querySelector('#btn');
const container=document.querySelector('#container');
const bodyElement=document.querySelector('#local');
const hardnes=document.querySelector('#hardInput');
const label=document.querySelector('#hard')
btn.addEventListener('click', function(){
  if(btn.dataset.new==='Start'){
    let localScore=scoreRec.innerText;
    localStorage.setItem('score',localScore);
    location.reload();}
    hardnes.addEventListener('mouseup',function(e){

      
      switch (e.target.value){
        case '5':
          createDivsForColors(shuffledColors);
          
          break;
        case '6':
          createDivsForColors(shuffledColors1);
          break;
        case '7':
          createDivsForColors(shuffledColors2);
          break;
        case '8':
          createDivsForColors(shuffledColors3);
          break;  
        case '9':
          createDivsForColors(shuffledColors4);
          break;
        case '10':
          createDivsForColors(shuffledColors5);
          break;
      }
    });
    btn.innerText='New Game';
    btn.dataset.new='Start';
    let ScoreRecord=localStorage.getItem('score');
    bodyElement.innerText=`Highest ${ScoreRecord}`;
  

//  const newh3=document.createElement('h3');
//  newh3.classList.add('score');
//  container.appendChild(newh3);  
});
//})