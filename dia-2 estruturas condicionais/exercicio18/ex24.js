//Faça um programa que leia a largura e o comprimento de um terreno
//retangular, calculando e mostrando a sua área em m². O programa também
//devemostrar a classificação desse terreno, de acordo com a lista abaixo:
// - Abaixo de 100m² = TERRENO POPULAR
// - Entre 100m² e 500m² = TERRENO MASTER
// - Acima de 500m² = TERRENO VIP

let largura = Number(window.prompt("Informe a largura"))
let comprimento = Number(window.prompt("Informe o comprimento"))
let area = largura * comprimento 

if(area>500){
    document.write("O terreno é vip")
}
else if(area>= 100 && area<= 500){
    document.write("O terreno é master")
}
else{
    document.write("O terreno é popular")
}