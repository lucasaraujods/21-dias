//Faça um Programa que leia um vetor de 5 números inteiros e mostre-os

let numero = [];

for(let i=0; i< 5; i++){

    numero[i]= parseInt(window.prompt("Informe um número"))
}

for(let i = 0; i < 5; i++) {
    console.log(numero[i]);
}
