//O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no
//peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o
//indivíduo dentro de certas faixas.
// - abaixo de 18.5: Abaixo do peso
// - entre 18.5 e 25: Peso ideal
// - entre 25 e 30: Sobrepeso
// - entre 30 e 40: Obesidade
// - acima de 40: Obseidade mórbida

let peso = Number(window.prompt("Informe o seu peso"))
let altura = Number(window.prompt("Informe a sua altura"))

let imc = peso/ (altura*altura)

if(imc< 18.5){
    document.write("Abaixo do peso")
}
else if(imc> 18.5 && imc < 25){
    document.write("peso ideal ")
}
else if(imc> 25 && imc < 30){
    document.write("sobrepeso")
}
else if(imc> 30 && imc < 40){
    document.write("obesidade")
}
else{
    document.write("Obesidade mórbida")
}