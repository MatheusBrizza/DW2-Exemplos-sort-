// run `node index.js` in the terminal

let numeros = [10, 20, 87, 5, 8];

// ordem crescente
numeros = numeros.sort((A, B) => B - A);

console.log(numeros);

//ordem decrescente
numeros = numeros.sort((A, B) => A - B);

console.log(numeros);

let pessoas = [
  {
    nome: 'mathias',
    valor: 10,
    idade: 26,
  },
  {
    nome: 'luiz',
    valor: 20,
    idade: 17,
  },
];
// dois elementos ordenados de forma numérica
pessoas = pessoas.sort((A, B) => {
  const valorComparacaoA = (A.valor - A.idade) / 2;
  const valorComparacaoB = (B.valor - B.idade) / 2;
  return valorComparacaoB - valorComparacaoA;
});

console.log(pessoas);
