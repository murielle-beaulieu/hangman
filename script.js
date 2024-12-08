import {words} from "./modules/math/random-word.js";
// import { createEl } from "./modules/dom/dom.js";
// import { createKeyboard } from "./modules/dom/dom.js";

// const gameLogic = () => {
//   // each time we guess a letter, it goes into the array
//   if
//   // we check if the random word for the game includes that letter
//   /* IF YES: we check at what array and append the letter at the correct index
//       - do we give each letter div a num? - do we select it with nth-child?  */
//   /* IF NO: we grey out the letter and we display the next picture, once we're at the last picture we lost
//       - how can we keep track of each image display/know when to stop? */
//   // once the game is over, button to play again
// }

const play = document.getElementById("play");
let guessArr = [];
let guessedIndex = "" ;
let selectLet = "";
let wrongGuess = 0;


const compare = (arr1, arr2) => {
  if(!arr1.some((l) => arr2.includes(l))) {
    console.log("the guessed letter is wrong")
    console.log(guessArr);
    wrongGuess+=1;
    console.log(`wrong guesses: ${wrongGuess}`);
    guessArr = [];
  } else {
    console.log("the guessed letter is right")
    guessedIndex = arr1.indexOf(arr2[0]);
    // reset the guess arr, so we only ever check for the letter we last pressed
    assignLetter();
    guessArr = [];
  }
}


// set up a counter for wrong guesses
// guessArr=[];
// correctDiv = "";
// // everytime we get a wrong letter, we go to the next picture
// wrongGuess += 1;
// console.log(wrongGuess);
// NOTE: all pictures are named h-number, I'm sure we can interpolate h-${strike};
// we get 10 guesses everytime?

function assignLetter() {
  // based on the index of the div where the correct letter belongs, we select the div where that letter will go
  let correctDiv = document.getElementsByClassName(`${guessedIndex}`);
  // transform the collection received to an array
  let correctDivArr = [...correctDiv];
  // let correctLet = document.createTextNode(${successLet});
  let correctPara = document.createElement("p");
  correctPara.textContent = `${selectLet}`;
  // Looping to append a new paragraph with the success letter to each div
  correctDivArr.forEach((element) => {
      let newPara = document.createElement('p');
      newPara.textContent = `${selectLet}`;
      element.appendChild(newPara);
  });
 }

const createKeyboard = () => {
  const display = document.getElementById("keyboard");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  alphabet.split("").forEach((letter) => {
    let button = document.createElement("button");
    button.setAttribute("id",letter);
    button.setAttribute("class","keys");
    button.textContent = letter;
    button.addEventListener('click', () => { letterClicked(letter)});
    display.appendChild(button);
  });

  function letterClicked(letter) {
    const buttonLetter = `${letter}`;
    // once it's clicked, it gets greyed out
    document.getElementById(buttonLetter).setAttribute("disabled", true);
    // saving the letter we pressed
    guessArr.push(buttonLetter);
    // accessing the letter we guessed
    selectLet = guessArr[0];
    // checking if the letter is in the playing word
    compare(playingArr,selectLet);
   }
}

const playingWord = words[Math.round(Math.random() * 200)];

const randomWord = () => {
const hangword = document.getElementById("hangword");

  playingArr.forEach((letter) => {
    let letterDiv = document.createElement("div");
    let placeholder = document.createElement("p");
    letterDiv.classList.add("hangletter", `${playingArr.indexOf(letter)}`);
    hangword.appendChild(letterDiv);
    // letterDiv.appendChild(placeholder);
    console.log("hurray!");
  }
  );
};


// P L A Y //
// start the game by clicking Play button

play.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("we're getting there!");
  createKeyboard();
  randomWord();
  play.remove();
})

// have the playing word as an array so we can use .include() method to check if the letter we guessed is correct
const playingArr = playingWord.split("");
console.log(playingArr);
