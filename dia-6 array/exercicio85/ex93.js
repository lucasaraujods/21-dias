//Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
//final, mostre uma listagem com todos os nomes informados, na ordem inversa
//daquela em que eles foram informados.

let array = [];
let arrayInvertido = [];
let contador

for( let i=0; i<7; i++){

    let nome = prompt("Informe o nome")
    array[i] = nome

}

console.log("A ordem original " + array)

contador = 6
for(let i=0; i<7; i++){

    arrayInvertido[i] = array[contador]
    contador--
}

console.log("A ordem invertida: " + arrayInvertido)