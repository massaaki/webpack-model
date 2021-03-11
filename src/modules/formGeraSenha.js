import passwordGenerate from './generators';

const passwordGeneratedField = document.querySelector('.password-generated');
const qtyField = document.querySelector('.qty-letters');
const checkboxUppers = document.querySelector('.chk-upper');
const checkboxLowers = document.querySelector('.chk-lower');
const checkboxNumbers = document.querySelector('.chk-number');
const checkboxSymbols = document.querySelector('.chk-symbol');

const generateButton = document.querySelector('.generate-password');

export default () => {
  generateButton.addEventListener('click', () => {
    passwordGeneratedField.innerHTML = generate();
  })
};

function generate() {
  const password = passwordGenerate(
    qtyField.value,
    checkboxUppers.checked,
    checkboxLowers.checked,
    checkboxNumbers.checked,
    checkboxSymbols.checked
  );
  return password || 'Select some options to generate your password';
}