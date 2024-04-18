function esPalindromo(texto) {
    // Validación de entrada (opcional, pero buena práctica)
    if (typeof texto !== 'string') {
    throw new TypeError('La entrada debe ser una cadena de texto.');
    }

    // Preprocesamiento del texto para manejo de mayúsculas, minúsculas y espacios en blanco
    texto = texto.replace(/\s/g, '').toLowerCase(); // Eliminar espacios y convertir a minúsculas

    // Invertir y comparar (método eficiente)
    let izquierda = 0;
    let derecha = texto.length - 1;
    while (izquierda < derecha) {
    if (texto[izquierda] !== texto[derecha]) {
        return false; // No es palíndromo
    }
    izquierda++;
    derecha--;
    }
    return true; // Es palíndromo
}

  // Ejemplo de uso
const texto = " arepera"; // Puede incluir espacios o letras en mayúscula/minúscula
const esPalindromoResult = esPalindromo(texto);
console.log(`"${texto}" ${esPalindromoResult ? 'es' : 'no es'} un palíndromo.`);
