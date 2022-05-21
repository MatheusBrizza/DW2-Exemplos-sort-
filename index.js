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
  },
  {
    nome: 'luiz',
    valor: 20,
  },
];

pessoas = pessoas.sort((A, B) => B.valor - A.valor);

console.log(pessoas);
