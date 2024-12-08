export const createEl = (elType, textVal, parent) => {
  const el = document.createElement(elType);
  const text = document.createTextNode(textVal);
  el.appendChild(text);
  parent.appendChild(el);
  el.id = "resultElement"
};


// wait for someone to press play (eventListener on button #play)
// create the alphabet and display in the div #lettersDisplay

export const createKeyboard = () => {
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
    console.log(buttonLetter);
    document.getElementById(buttonLetter).setAttribute("disabled", true);
  }
}
