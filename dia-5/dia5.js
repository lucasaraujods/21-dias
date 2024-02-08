let numero1= number(prompt("Informe o primeiro número"))
let numero2 = number(prompt("informe o segundo número"))
let opcao= ""
switch(opcao)
{
    case "multiplicação":

        console.log("a multiplicação dos dois número é igual á" + numero1 * numero2)
        break
    case "adição":
        console.log("a adição dos dois número é igual á" + numero1 + numero2)
        break
    case "subtração":
        console.log("a subtração dos dois número é igual á" + numero1 - numero2)
        break
    case "divisão":
        if(numero2=0)
        {
            console.log("O número não pode ser dividio por 0")
        }
        else
        {
            console.log("a divisão dos dois número é igual á" + numero1/numero2)
            break
        }
    default:
            console.log("A opção escolhida não corresponde aos requesitos")
            break
}