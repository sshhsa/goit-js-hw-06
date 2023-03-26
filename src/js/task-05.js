const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

input.addEventListener('input', (targetInputText) => {
  span.textContent = targetInputText.currentTarget.value;
});
