export const createPlayAgainButton = () => {
  const againButton = document.createElement("button");
  const destination = document.createElement("a");
  // destination.setAttribute("href","location.href");
  const againText = document.createTextNode("play again?");
  destination.appendChild(againText);
  againButton.appendChild(destination);
  againButton.classList.add("again");
  document.querySelector("#result").appendChild(againButton);
  againButton.addEventListener('click', () => { location.reload() });
};
