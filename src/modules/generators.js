// console.log(String.fromCharCode(33));

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]!@#$%*()_+-=';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senha = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maiusculas && senha.push(geraMaiuscula());
    minusculas && senha.push(geraMinuscula());
    numeros && senha.push(geraNumero());
    simbolos && senha.push(geraSimbolo());
  }
  
  return senha.join('').slice(0, qtd);
}

