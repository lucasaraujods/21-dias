let mediaGeral= 0
let contador=1
let contadorMulheres=0
let contadorHomens=0
let notaMaiorHomens=0

while(contador<=10)
{
    nota= parseInt(prompt("informe a sua nota"))
    sexo= prompt("informe seu sexo")

    if(nota>7 && sexo == "femenino")
    {
        contadorMulheres++
    }

    if(sexo == "masculino")
    {
        if(nota> notaMaiorHomens)
        {
            notaMaiorHomens= nota
        }
        contadorHomens++
    }

    mediaGeral += nota  
    contador++
}

mediaGeral= mediaGeral/10 

console.log("A média dos alunos foi " + mediaGeral)
console.log("A quantidade de homens cadastrados foi " + contadorHomens)
console.log("A quantidade de mulheres que tiveram a nota acima de 7 foram " + contadorMulheres)
console.log("A maior nota dos alunos homens foi " + notaMaiorHomens)



