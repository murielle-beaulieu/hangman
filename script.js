import { words } from "./modules/math/random-word.js";
import { createPlayAgainButton } from "./modules/dom/dom.js";

const play = document.getElementById("play");
let guessArr = [];
let winningArr = [];
let guessedIndex = "" ;
let selectLet = "";
let wrongGuess = 0;
let youWon = false;


/* * * * * GAME LOGIC * * * * */
const compare = (arr1, arr2) => {
  if(!arr1.some((l) => arr2.includes(l))) {
    console.log("the guessed letter is wrong");
    wrongGuess+=1;
    if (wrongGuess <= 10) {
      updateImage();
    } else {
      gameoverLosing();
    }
    guessArr = [];
  } else {
    console.log("the guessed letter is right");
    guessedIndex = arr1.indexOf(arr2[0]);
    // reset the guess arr, so we only ever check for the letter we last pressed
    assignLetter();
    guessArr = [];
  }
}

const winning = (arr1, arr2) => {
  if (arr2.every((element) => arr1.includes(element)) && arr1.length === arr2.length) {
    youWon = true;
    gameoverWinning();
  }
};

const gameoverLosing = () => {
  const kb = document.getElementById("keyboard");
  kb.remove();
  document.getElementById("buddy").remove();
  const gameOver = document.createElement("h3");
  const ko = document.createTextNode("GAME OVER! Better luck next time");
  gameOver.appendChild(ko);
  document.querySelector("#result").appendChild(gameOver);
  createPlayAgainButton();

  /** would be nice it would just reload a with a new playing word and generate new keyboard/divs,
   instead of having to press play again **/
};

const gameoverWinning = () => {
  const kb = document.getElementById("keyboard");
  kb.remove();
  document.getElementById("buddy").remove();
  const gameWon = document.createElement("h3");
  const congrats = document.createTextNode("CONGRATULATIONS! You won!");
  gameWon.appendChild(congrats);
  document.querySelector("#result").appendChild(gameWon);
  createPlayAgainButton();
}


const assignLetter = () => {
  // based on the index of the div where the correct letter belongs, we select the div where that letter will go
  let correctDiv = document.getElementsByClassName(`${guessedIndex}`);
  // transform the collection received to an array
  let correctDivArr = [...correctDiv];
  // let correctLet = document.createTextNode(${successLet});
  let correctPara = document.createElement("p");
  correctPara.textContent = `${selectLet}`;
  // looping to append a new paragraph with the success letter to each div
  correctDivArr.forEach((element) => {
      let newPara = document.createElement('p');
      newPara.textContent = `${selectLet}`;
      element.appendChild(newPara);
  });
 }


/* * * * * IMAGES * * * * */
 const imageDiv = document.getElementById("imgDisplay");

 function createImage() {
    let hangmanImage = document.createElement("img");
    hangmanImage.classList.add("buddy");
    hangmanImage.setAttribute("id","buddy")
    hangmanImage.setAttribute("src", `./assets/img/h-${wrongGuess}.jpg`);
    hangmanImage.setAttribute("alt","Hangman Drawing");
    imageDiv.appendChild(hangmanImage);
  }

  function updateImage() {
    let currentImg = document.getElementsByClassName("buddy");
    currentImg = currentImg[0];
    currentImg.removeAttribute("src");
    currentImg.setAttribute("src", `./assets/img/h-${wrongGuess}.jpg`);
}


function createKeyboard()  {
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
    const pressedLetter = `${letter}`;
    document.getElementById(pressedLetter).setAttribute("disabled", true);
    guessArr.push(pressedLetter);
    if(playingArr.includes(pressedLetter)){
      winningArr.push(pressedLetter);
      console.log(`livin and winnin ${winningArr}`);
    }
    winning(winningArr,uniquePlayingArr);
    selectLet = guessArr[0];
    compare(playingArr,selectLet);
   }
}

/* * * * * *  RANDOM WORD * * * * * */
// set the word we're trying to guess for this game

const playingWord = words[Math.round(Math.random() * 200)];

const randomWord = () => {
const hangword = document.getElementById("hangword");

  playingArr.forEach((letter) => {
    let letterDiv = document.createElement("div");
    letterDiv.classList.add("hangletter", `${playingArr.indexOf(letter)}`);
    hangword.appendChild(letterDiv);
    console.log("hurray!");
  }
  );
};


/* * * * * *  P L A Y  * * * * * */

// start the game by clicking Play button

play.addEventListener('click', (event) => {
  event.preventDefault();
  createKeyboard();
  createImage();
  randomWord();
  play.remove();
})

// have the playing word as an array so we can use .include() method to check if the letter we guessed is correct
const playingArr = playingWord.split("");
console.log(playingArr);

// reducing the array for the playing word to avoid dupplicate letters (easier to compare with our guessing array)
const uniquePlayingArr = playingArr.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
