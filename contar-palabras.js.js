function contarPalabras(frase) {
    // Elimina espacios en blanco al inicio y final de la frase
    frase = frase.trim();

    // Separa la frase en palabras usando espacios como delimitador
    const palabras = frase.split(' ');

    // Retorna la cantidad de palabras
    return palabras.length;
}
const frase = "Esta es una frase de ejemplo";
const numeroPalabras = contarPalabras(frase);
console.log(`La frase "${frase}" tiene ${numeroPalabras} palabras.`);
