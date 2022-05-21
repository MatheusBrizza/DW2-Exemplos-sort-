let numeros = [10, 20, 30];

// 0 é o valor default do acumulador
const resultado = numeros.reduce(
  (acumulador, proximoValor) => acumulador + proximoValor,
  0
);

console.log(resultado);
