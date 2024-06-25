let salario = 1000;
let qtdDepedentes = 1;


if (qtdDepedentes == 0)  {
    console.log('não possui depedentes');
} else if (qtdDepedentes >= 1 && qtdDepedentes <= 5) {
    console.log('o aumento do salario foi: ' + salario * 0.3);
} else if (qtdDepedentes >= 6) {
    console.log('o aumento do salario foi: ' + salario * 0.4);
}