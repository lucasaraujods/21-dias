//Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto, o mais baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que pergunte a cada um dos clientes da academia seu código, sua altura e seu peso.

//O final da digitação de dados deve ser dada quando o usuário digitar 0 (zero) no campo código.

//Ao encerrar o programa também deve ser informados os códigos e valores do cliente mais alto, do mais baixo, do mais gordo e do mais magro, além da média das alturas e dos pesos dos clientes.

let codigoMaiorPeso = 0
let codigoMenorPeso = 0
let codigoMenorAltura = 0
let codigoMaiorAltura = 0
let codigo = 0
let altura = 0
let peso = 0
let contador = 0
// adicionando: Number.MIN_SAFE_INTEGER que significa:  o menor número inteiro seguro.
let maiorPeso= Number.MIN_SAFE_INTEGER
let menorPeso = Number.MAX_SAFE_INTEGER
let menorAltura = Number.MAX_SAFE_INTEGER
let maiorAltura = Number.MIN_SAFE_INTEGER
let somaAltura = 0
let somaPeso = 0
let mediaAltura = 0 
let mediaPeso = 0
let continuar = true

while(true){

    codigo = Number(window.prompt("Informe o " + contador + " º código da pessoa"))
    if(codigo === 0) break;

    altura = parseFloat(window.prompt("Informe sua altura da " + contador + " ª pessoa"))
    peso = parseFloat(window.prompt("Informe seu peso da " + contador + " ª pessoa"))

    contador++
    somaAltura = somaAltura + altura
    somaPeso = somaPeso + peso

    if(altura>maiorAltura){
        maiorAltura = altura
        codigoMaiorAltura = codigo
    }
    if(altura < menorAltura){
        menorAltura = altura
        codigoMenorAltura = codigo
    }

    if(peso> maiorPeso){
        maiorPeso = peso
        codigoMaiorPeso = codigo
    }
    if(peso < menorPeso){
        menorPeso = peso
        codigoMenorPeso = codigo
    }
}

mediaAltura = somaAltura/contador
mediaPeso = somaPeso/contador

console.log(` O código: ${codigoMaiorAltura} possui a maior altura com ${maiorAltura} metros`)
console.log(` O código: ${codigoMenorAltura} possui a menor altura com ${menorAltura} metros`)
console.log(` O código: ${codigoMaiorPeso} possui o maior peso com ${maiorPeso} KGs`)
console.log(` O código: ${codigoMenorPeso} possui o menor peso com ${menorPeso} KGs`)
console.log(` A media de altura dos clientes é de: ${mediaAltura} metros`)
console.log(` A media do peso dos clientes é de: ${mediaPeso} KGs`)





