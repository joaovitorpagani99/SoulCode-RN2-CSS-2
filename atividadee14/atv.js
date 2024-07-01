//1. Crie uma função arrow que recebe dois números e retorna o maior deles.


const maiorNumero = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};

console.log(maiorNumero(10, 5));


//-2. Dado um array de palavras, use forEach para imprimir cada palavra com a primeira letra em maiúscula.

const palavras = ['banana', 'maçã', 'uva', 'melancia', 'abacaxi'];

palavras.forEach((palavra) => {
    console.log(palavra.charAt(0).toUpperCase() + palavra.slice(1));
});

//3. Use map para transformar um array de números, multiplicando cada número por 5.
numeros = [1, 2, 3, 4, 5];

numeros.map((numero) => {
    console.log(numero * 5);
})

//4. Dado um array de idades, use filter para retornar apenas as idades maiores ou iguais a 18.



idades = [10, 15, 18, 20, 25, 30, 35, 40, 45, 50];
const verifica = (valor) => {
    return valor >= 18;
}

const resultado = idades.filter((idade) => {
    return verifica(idade);
})

console.log(resultado)

//5. Dado um objeto representando um livro, que contém título, autor, e um objeto aninhado com informações de publicação (editora, ano), acesse o nome da editora.

livro = {
    titulo: "eli",
    auto: "Jv pagani",
    publicacao: {
        editora: "pagani",
        ano: "2020"
    }
}

console.log(livro.publicacao.editora)

//-6. Crie um array de frutas e use a desestruturação para extrair a primeira e a segunda fruta em variáveis separadas.
const frutas = ['banana', 'maçã', 'uva', 'melancia', 'abacaxi'];

const fruta = frutas[0];
const fruta2 = frutas[1];

console.log(fruta);
console.log(fruta2)

//-7. Tente adaptar os exercícios da atividade da semana 03 para utilizar arrow function, forEach, map e filter.

//Exercício 1

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [];

const arrys = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            array2.push(array[i + 1]);
        }
    }

    for (let i = 0; i < array2.length; i++) {
        console.log(array2[i]);
    }
}

arrys(array);

// Exercício 2

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrays = (array) => {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma = soma + array[i];
    }

    return soma;
}

let resultado = arrays(array);

console.log(resultado);

//exercicio 4
let vogais = ['a', 'e', 'i', 'o', 'u'];

const contaVogais = (frase) => {
    let contador = 0;
    frase = frase.toLowerCase();
    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) {
            contador++;
        }
    }
    return contador;
}


let frase = 'Aprendendo JavaScript';

console.log(contaVogais(frase));

//exercicio 5

let array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

const menorNrArray = (array) => {
    let menorValor = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < menorValor) {
            menorValor = array[i];
        }
    }
    return menorValor;

}

let menor = menorNrArray(array);

console.log(menor);



//exercicio 6

let array = [7.0, 8.0, 9.0]

const mediaArray = (array) => {
    let soma = 0;
    let media;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    media = soma - array.length;

    return media;

}

let media = mediaArray(array);

console.log(media)
