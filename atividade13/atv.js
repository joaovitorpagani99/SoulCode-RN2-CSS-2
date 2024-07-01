// Crie uma função que recebe um array com os nomes dos alunos de uma turma, e outro array que recebe a lista de presença com os nomes. Retorne uma lista com quais alunos faltaram.
listaAlunos = ["joao", "vitoria", "jhennyf", "carla"]
presenca = ["joao"]

const faltaram = (listaAlunos, presenca) => {
    let alunosFaltaram = [];

    listaAlunos.forEach((aluno) => {
        if (!presenca.includes(aluno)) {
            alunosFaltaram.push(aluno);
        }
    });
    return alunosFaltaram;
}

let alunosQueFaltaram = faltaram(listaAlunos, presenca);
console.log("Alunos que faltaram:", alunosQueFaltaram);

//2. Crie uma função que recebe um array de números e retorna um array com todos os valores elevados ao quadrado.


numeros = [2, 3, 4, 5, 6, 7, 8, 9]

const quadrado = (array) => {
    let quadrado = []
    array.forEach((numero) => {
        numero = numero * numero;
        quadrado.push(numero);
    })
    return quadrado;
}


let nrquadrado = quadrado(numeros);
console.log(nrquadrado)

//3. Crie uma função que recebe um array de nomes de arquivos, e recebe também uma extensão, a função deve retornar apenas os nomes de arquivo que forem dessa extensão.
