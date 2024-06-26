//1. Escreva um programa que inverte uma string
function inverterString(str) {
    return str.split('').reverse().join('');
}

const stringOriginal = "teste";
console.log(inverterString(stringOriginal));

//Crie uma variável que armazena uma frase, e utilize as funcionalidades de string para remover uma palavra específica da frase e trocar por "###"
function substituirPalavra(frase, palavraParaRemover) {
    return frase.replace(palavraParaRemover, "###");
}

const fraseOriginal = "Esta e uma frase";
const palavraParaRemover = "frase";
console.log(substituirPalavra(fraseOriginal, palavraParaRemover));

//3. Crie uma variável que armazena um email, o programa deve indicar se este email é do domínio soulcode.com
const emailProf = "professor@soulcodeacademy.org";

if(emailProf.endsWith("soulcode.com") || emailProf.endsWith("soulcodeacademy.org")) {
    console.log("Este email pertence a Soulcode!");
} else {
    console.log("Este email não pertence a Soulcode!")
}