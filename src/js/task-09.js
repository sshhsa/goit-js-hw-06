const buttonChangeColor = document.querySelector('.change_color');
const colorValue = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonChangeColor.addEventListener('click', onButtonChangeColor);

function onButtonChangeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorValue.textContent = newColor;
}
