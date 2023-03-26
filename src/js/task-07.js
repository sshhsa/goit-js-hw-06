const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', onInputEqual);

function onInputEqual() {
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
}
