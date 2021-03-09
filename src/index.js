import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

//iife
(function () {
  const cpf = new GeraCPF() 
  const cpfField = document.querySelector('.document-generated');
  cpfField.innerHTML = cpf.geraNovoCpf();
})();