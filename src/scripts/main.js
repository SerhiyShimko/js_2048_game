'use strict';

// Uncomment the next lines to use your game instance in the browser
const Game = require('../modules/Game.class');
const game = new Game();

const button = document.querySelector('.start');

button.addEventListener('click', (e) => {
  if (button.classList.contains('start')) {
    game.start();
    game.getScore();
  } else {
    game.restart();
    game.getScore();
  }
});

document.addEventListener('keydown', (e) => {
  e.preventDefault();

  if (e.key === 'ArrowLeft') {
    game.moveLeft();
    game.newElement();
    game.getScore();
  }

  if (e.key === 'ArrowRight') {
    game.moveRight();
    game.newElement();
    game.getScore();
  }

  if (e.key === 'ArrowUp') {
    game.moveUp();
    game.newElement();
    game.getScore();
  }

  if (e.key === 'ArrowDown') {
    game.moveDown();
    game.newElement();
    game.getScore();
  }
});
