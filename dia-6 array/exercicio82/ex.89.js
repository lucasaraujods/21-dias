//Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário

let array = [];
let arrayInvertido = [];

let contador = parseInt(prompt("Informe a quantidade de elementos que deseja colocar no vetor"))

for(let i =0; i<(contador-1); i++){

    let numero = parseInt(prompt("informe o número do indice: " + (i+1) ))
    array[i] = numero
}

console.log ("O array original: " + array)

let contador2 = contador-1

for(let i=(contador2); i>=0; i--){

    arrayInvertido[i] = array[contador2]
    contador2--
}

console.log("O array invertido é: " + arrayInvertido)