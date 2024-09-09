//Elabore um algoritmo que após receber números de 1 a 7 indique qual é o dia da semana correspondente.

let numeroSemana = parseInt(window.prompt("Informe um número de 1 a 7  para saber o dia da semana"))

switch(numeroSemana){
    case 1:
        document.write("O dia da Semana informado é domingo")  
        break;
    case 2: 
        document.write("O dia da Semana informado é segunda")  
        break;
    case 3:
        document.write("O dia da Semana informado é terça")  
        break;
    case 4: 
        document.write("O dia da Semana informado é quarta")  
        break;
    case 5: 
        document.write("O dia da Semana informado é quinta")  
        break;
    case 6: 
        document.write("O dia da Semana informado é sexta")  
        break;
    case 7: 
        document.write("O dia da Semana informado é sábado")  
        break;
}