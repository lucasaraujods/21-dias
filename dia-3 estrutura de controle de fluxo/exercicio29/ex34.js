//Desenvolver um algoritmo que leia um valor numérico inteiro
//entre os valores 1 e 12 e apresente por extenso o nome do mês
//correspondente ao valor de entrada. Caso sejam fornecidos
//valores menores que 1 e maiores que 12, o programa deve
//apresentar a mensagem "Valor inválido".

let numeroMes = parseInt(window.prompt("Informe o número de 1 á 12 para saber o mês do ano"))
switch (numeroMes)
{
    case 1:
        document.write("O NÚMERO CORRESPONDE AO MÊS DE JANEIRO");
        break;
    case 2:
        document.write("O NÚMERO DIGITADO CORRESPONDE AO MÊS DE FEVEREIRO");
        break;
    case 3:
        document.write("O NÚMERO DIGITADO CORRESPONDE AO MÊS DE MARÇO");
        break;
    case 4:
        document.write("O NÚMERO DIGITADO CORRESPONDE AO MÊS DE ABRIL");
        break;
    case 5:
        document.write("O NÚMERO DIGITADO CORRESPONDE AO MÊS DE MAIO");
        break;
    case 6:
        document.write ("O NÚMERO DIGITADO CORRESPONDE AO MÊS DE JUNHO");
        break;
    case 7:
        document.write ("O NÚMERO DIGITADO CORRESPONDE AO MÊS DE JULHO");
        break;
    case 8:
        document.write ("O NÚMERO DIGITADO CORRESPONDE AO MÊS DE AGOSTO");
        break;
    case 9:
        document.write ("O NÚMERO DIGITADO CORRESPONDE AO MÊS DE SETEMBRO");
        break;
    case 10:
        document.write("O NÚMERO DIGITADO CORRESPONDE AO MÊS DE OUTUBRO");
        break;
    case 11:
        document.write ("O NÚMERO DIGITADO CORRESPONDE AO MÊS DE NOVEMBRO");
        break;
    case 12:
        document.write ("O NÚMERO DIGITADO CORRESPONDE AO MÊS DE DEZEMBRO");
        break;
    default:
        document.write ("O NÚMERO DIGITADO NÃO CORRESPONDE A UM MÊS ");
        break;
}

