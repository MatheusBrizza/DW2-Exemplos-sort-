let numeros = [10, 20, 30];
// reduce é usado mais para funções matemáticas
// 0 é o valor default do acumulador
const resultado = numeros.reduce(
  (acumulador, proximoValor) => acumulador + proximoValor,
  0
);

console.log(resultado);
