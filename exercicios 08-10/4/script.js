function media(a, b, c){
    let soma = a + b + c;
    let media = soma / 3;
    return Math.round (media * 100) / 100;
}

console.log(media(4, 6, 8));
