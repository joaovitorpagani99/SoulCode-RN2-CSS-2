//Crie uma função para calcular e retorna o IMC, e outra função que recebe o valor de IMC e indica o status no terminal.

function calculaIMC(peso, altura) { 
    return peso / (altura * altura);
}

//Crie uma função que recebe um número (PARÂMETRO) de 0 a 1. E RETORNA em porcentagem: percentual(0.456) -> 45.6%

function porcentagem(numero) {
    return numero * 100;
}

console.log(porcentagem(0.456) + "%");

// Crie uma função que recebe um número (PARÂMETRO). E RETORNA se ele é negativo (true ou false). Ex: ehNegativo(-2) ===> true
function ehNegativo(numero) {
    return numero < 0;
}

console.log(ehNegativo(-2));

//Crie uma função que conte até um número passado por parâmetro. Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000. OBS: Não possui retorno.

function contar(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(i);
    }
}

console.log(contar(5));

//Crie uma função que recebe um nome e sobrenome. RETORNA o nome completo como resultado.

let nome;
let sobrenome;

function nomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome;
}

console.log(nomeCompleto("João", "Silva"));

//Crie uma função para calcular a área de um circulo = PI * R * R. Considere PI = 3.14.

function areaCirculo(raio) {
    return 3.14 * raio * raio;
}

console.log(areaCirculo(5));

//Crie uma função que recebe a área de um circulo e mostra o nível:
//Entre 1 e 20 => Nível I
//Entre 21 e 40 => Nível II
//Qualquer outro diâmetro => Nível inválido

function areaCirculo(raio) {
    let area = 3.14 * raio * raio;
    if (area >= 1 && area <= 20) {
        console.log("Nível I");
    } else if (area >= 21 && area <= 40) {
        console.log("Nível II");
    } else {
        console.log("Nível inválido");
    }
}

console.log(areaCirculo(5));

//8. Escreva uma função que receba uma string e retorne a mesma string em letras minúsculas.
function minusculas(string) {
    return string.toLowerCase();
}

console.log(minusculas("TEXTO"));

//Escreva uma função que receba uma string e um caractere e retorne o número de ocorrências desse caractere na string.

function ocorrencias(caractere) {
    let string = "TEXTO";
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == caractere) {
            contador++;
        }
    }
    return contador;
}

console.log(ocorrencias("T"));
