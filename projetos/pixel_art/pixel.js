const colorPalette = document.querySelectorAll('.color');

/**
 * Consultei o site css-tricks(Chris Coyier) para realizar a lógica desta ṕarte.
 * https://css-tricks.com/snippets/javascript/random-hex-color/
 */

function generateRandomColor() {
  colorPalette[0].style.background = 'black';

  function addColor() {
    for (let i = 1; i < colorPalette.length; i += 1) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const hexColor = `#${randomColor}`;

      colorPalette[i].style.background = hexColor;

      if (colorPalette[i].style.background === '') {
        colorPalette[i].style.background = 'red';
      }
    }
  }

  addColor();
}

window.onload = generateRandomColor;

// Quadro de Pixels
let width = 5;
let height = 5;
const pixelBoard = document.getElementById('pixel-board');

function addPixelBoard() {
  for (let i = 0; i < height; i += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';

    for (let j = 0; j < width; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';

      pixelLine.appendChild(pixel);
    }

    pixelBoard.appendChild(pixelLine);
  }
}

addPixelBoard();

// Classe 'selected' nas cores
const colorClassName = 'color selected';
colorPalette[0].className = colorClassName;

const colors = document.querySelectorAll('.color');

function changeClassName(event) {
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].className === colorClassName) {
      colors[i].className = 'color';
    }
  }

  const colorSelected = event.target;
  colorSelected.className = colorClassName;
}

// Laço para adicionar o evento de click nas cores
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', changeClassName);
}

// Pintar o quadro de pixels
let pixels = document.querySelectorAll('.pixel');

function changePixelColor(event) {
  const backgroundPixel = event.target;

  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].className === 'color selected') {
      backgroundPixel.style.background = colors[i].style.background;
    }
  }
}

function addEventToPixel(list) {
  for (let i = 0; i < pixels.length; i += 1) {
    list[i].addEventListener('click', changePixelColor);
  }
}

addEventToPixel(pixels);

// Botão para limpar quadro
const button = document.getElementById('clear-board');

function cleanBoard() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.background = 'white';
  }
}

button.addEventListener('click', cleanBoard);

// Caixa de pixel conforme o tamanho que o usuário digitou no input
const input = document.getElementById('board-size');
const inputButton = document.getElementById('generate-board');

function verifyInputValue(value) {
  if (value === '') {
    alert('Board inválido!');

    const inputValue = 5;
    return inputValue;
  }

  if (parseInt(value, 10) < 5) {
    const inputValue = 5;
    return inputValue;
  }

  if (parseInt(value, 10) > 50) {
    const inputValue = 50;
    return inputValue;
  }

  return value;
}

function addPixelBoardUser() {
  pixelBoard.innerHTML = '';
  const inputValue = verifyInputValue(input.value);
  height = inputValue;
  width = inputValue;

  for (let i = 0; i < height; i += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'pixel-line';
    for (let j = 0; j < width; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelLine.appendChild(pixel);
    }
    pixelBoard.appendChild(pixelLine);
  }

  pixels = document.querySelectorAll('.pixel');
  addEventToPixel(pixels);
}

inputButton.addEventListener('click', addPixelBoardUser);
