// function ehPalindromo(str) {
//     let palavra = str.replace(/\s+/g, '').toLowerCase();

//     let palavraInvertida = palavra.split('').reverse().join('');

//     return palavra === palavraInvertida
// }

// console.log(ehPalidromo("arara"));

function ehPalindromo(str) {
    // Remove espaços e converte para minúsculas
    let palavra = str.replace(/\s+/g, '').toLowerCase();
    // Inverte a string
    let palavraInvertida = palavra.split('').reverse().join('');
    // Verifica se a string original é igual à invertida
    return palavra === palavraInvertida;
}
// Exemplo de uso
console.log(ehPalindromo("arara")); // true
console.log(ehPalindromo("banana")); // false