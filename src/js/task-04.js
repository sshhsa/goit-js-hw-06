const counter = document.getElementById('value');
const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function handleButtonDecrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
decrButton.addEventListener('click', handleButtonDecrement);

function handleButtonIncrement() {
  counterValue += 1;
  counter.textContent = counterValue;
}
incrButton.addEventListener('click', handleButtonIncrement);
