function factorial(numero) {
  if (numero < 0 || !Number.isInteger(numero)) {
    throw new Error('El número debe ser un entero no negativo.');
    }

  if (numero === 0 || numero === 1) {
    return 1;
    }

   return numero * factorial(numero - 1);
}
const numero = 6;
const resultadoFactorial = factorial(numero);
console.log(`El factorial de ${numero} es ${resultadoFactorial}`);
