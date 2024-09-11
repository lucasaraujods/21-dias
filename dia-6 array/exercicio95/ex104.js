let arrayNota = []
let arrayNome = []
let continuar = true
let somaNotas = 0
let contadorNotas = 0
let mediaTurma = 0
let contadorNomes =0 

while(continuar){

    for(let i = 0; i<5; i++){
        
        let nome = prompt("Informe o seu nome")
        contadorNomes++ 

        let nota = parseFloat(prompt("Informe o sua nota"))

        arrayNome[contadorNomes] = nome

        if(nota<0){

            console.log("Nota invalida")
    
        }else{
    
            arrayNota[contadorNotas] = nota
            somaNotas = somaNotas + nota
            contadorNotas++
        }
    }
     
    continuar = prompt("Deseja continuar? (s/n)")
    if(continuar != "s")break;

}
mediaTurma = somaNotas/contadorNotas

console.log("A nota de cada aluno é " + arrayNota)
console.log("A soma das notas é " + somaNotas)
console.log("A media da turma é de " + mediaTurma)