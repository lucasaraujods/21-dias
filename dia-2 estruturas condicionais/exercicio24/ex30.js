//Um programa de vida saudável quer dar pontos atividades físicas que podem
//ser trocados por dinheiro. O sistema funciona assim:
// - Cada hora de atividade física no mês vale pontos
// - até 10h de atividade no mês: ganha 2 pontos por hora
// - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
// - acima de 20h de atividade no mês: ganha 10 pontos por hora
// - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos) 

let horas = parseInt(window.prompt("Informe a quantidade de horas feitas no mês"))
let resultado = 0

if(horas<10 ){
    resultado = 2 * 5
    document.write("você ganhou 2 pontos e " + resultado + " centavos")
}
else if(horas>10 && horas<= 20){
    resultado = 5 * 5
    document.write("você ganhou 2 pontos e " + resultado + " centavos")
}
else{
    resultado = 10 * 5
    document.write("você ganhou 2 pontos e " + resultado + " centavos")
}