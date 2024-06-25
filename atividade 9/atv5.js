let diaDaSemana = 4; 

if (diaDaSemana === 1 || diaDaSemana === 7) {
    console.log("Final de semana");
} else if (diaDaSemana >= 2 && diaDaSemana <= 6) {
    console.log("Dia útil");
} else {
    console.log("Valor inválido. Por favor, insira um número entre 1 e 7.");
}