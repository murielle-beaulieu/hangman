# Hangman

## Requirements / Purpose

- MVP:
- A game should start with a word being randomly selected.
- A representation of the word made up of underscore (_) characters should display on the screen.
- Create a user interface made up of buttons representing all 26 letters of the alphabet.
- Clicking a button should register its letter as a 'guess'
- If the letter clicked is in the word each underscore corresponding to that letter should be replaced with the letter.
- If the letter is not in the word, an additional element to the hangman diagram should be added.
- The game should keep track of which letters have been 'guessed' already.
- The game should provide a win or loss message depending on the outcome
- There should be some functionality to play again.
---

  Purpose of project: 2nd Nology project, consolidation of Javascript concepts. 
  Using JavaScript, SCSS/Sass, HTML.
  
---

## Build Steps

-  n/a

---

## Design Goals / Approach

- Aimed to do a pretty simple design, but clear and with good contrast

---

## Features

- Disapearing keys for the keyboard once clicked, so it's clear which letters are still available to guess
- Image for the hangman draws a strike each time you guess a letter incorrectly
- Replay button available at the end of each game

---

## Known issues

-   The hangman image is pretty jumpy from how I implemented the image updating

---

## Future Goals

- Input via keyboard, as well as the keyboard buttons
  
---

## Change logs

- n/a

---

## What did you struggle with?

- Assigning a correctly guessed letter the the corresponding display box was a bit of a challenge, but once that was out of the way things became easier
- I'm not fully satisfied with the image display/updating
- I struggled with the modules implementation, I was started my main js file and then tried to split portions off, which made it harder to split it off without breaking the existing code

---


## Further details, related projects, reimplementations

-  n/a
