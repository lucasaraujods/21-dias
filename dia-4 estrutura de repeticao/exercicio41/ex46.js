//Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
    //dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
    //das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
    //novo com a mulher mais velha. 

let contadorHomem = 0;
let contadorMulher = 0;
let idadeHomem1 = 0;
let idadeHomem2 = 0;
let idadeMulher1 = 0;
let idadeMulher2 = 0;

while (contadorHomem < 2 || contadorMulher < 2) {
    let sexo = window.prompt("Informe o seu sexo com M ou F");
    let idade = parseInt(window.prompt("Informe a sua idade"));

    if (sexo === "M") {
        if (contadorHomem === 0) {
            idadeHomem1 = idade;
        } else {
            idadeHomem2 = idade;
        }
        contadorHomem++;
    } else if (sexo === "F") {
        if (contadorMulher === 0) {
            idadeMulher1 = idade;
        } else {
            idadeMulher2 = idade;
        }
        contadorMulher++;
    } else {
        window.alert("Sexo inválido! Informe M ou F.");
    }
}

let idadeMaiorHomem, idadeMenorHomem;
if (idadeHomem1 > idadeHomem2) {
    idadeMaiorHomem = idadeHomem1;
    idadeMenorHomem = idadeHomem2;
} else {
    idadeMaiorHomem = idadeHomem2;
    idadeMenorHomem = idadeHomem1;
}

let idadeMaiorMulher, idadeMenorMulher;
if (idadeMulher1 > idadeMulher2) {
    idadeMaiorMulher = idadeMulher1;
    idadeMenorMulher = idadeMulher2;
} else {
    idadeMaiorMulher = idadeMulher2;
    idadeMenorMulher = idadeMulher1;
}

let soma = idadeMaiorHomem + idadeMenorMulher;
let produto = idadeMenorHomem * idadeMaiorMulher;

document.write("A soma das idades do homem mais velho com a mulher mais nova é: " + soma);
document.write("O produto das idades do homem mais novo com a mulher mais velha é: " + produto);


