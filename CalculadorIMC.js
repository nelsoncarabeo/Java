function calcularIMC(peso, altura) {
  // Valida que los parámetros sean numéricos
  if (isNaN(peso) || isNaN(altura)) {
    throw new Error('Los parámetros deben ser números válidos.');
  }

  // Calcula el IMC
  const IMC = peso / (altura * altura);

  // Retorna el IMC
  return IMC;
}
const peso = 70; // En kilogramos
const altura = 1.70; // En metros
const IMC = calcularIMC(peso, altura);
console.log(`El IMC para la persona con peso ${peso} kg y altura ${altura} m es de ${IMC.toFixed(2)}`);
