//1. Use um laço while para imprimir na tela todos os números pares de 2 a 10.

let n = 2;

while (n <= 10) { 
    if (n % 2 === 0) {
        console.log(n);
    }
    n++;    
}

//2.  Use um laço while para imprimir na tela a tabuada do 7 (multiplicando de 1 a 10).

let i = 1;

while (i <= 10) {
    n = 7 * i;
    console.log(n);
    i++;
}


//Use um laço while para somar de 1 até 999, apenas somando os números ímpares. Utilize um if para verificar se o número é ímpar.

let i = 1;
let soma = 0;
while (i <= 999) {
    if (i % 2 !== 0) {
        console.log(soma += i);
    }
    i++;
}

//4. Crie um programa que conta quantos números entre 1 e 1000 são divisíveis por 9, mostre o número e ao final exiba o total de números divisíveis por 9.
let contador = 0;

for (let i = 1; i <= 1000; i++) {
    if (i % 9 === 0) {
        console.log(i);
        contador++;
    }
}

console.log("Total de números divisíveis por 9 entre 1 e 1000: " + contador);