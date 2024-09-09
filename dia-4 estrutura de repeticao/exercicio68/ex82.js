//Desenvolver um programa para verificar a nota do aluno em uma prova com 10 questões, o programa deve perguntar ao aluno a resposta de cada questão e ao final comparar com o gabarito da prova e assim calcular o total de acertos e a nota (atribuir 1 ponto por resposta certa).

//Após cada aluno utilizar o sistema deve ser feita uma pergunta se outro aluno vai utilizar o sistema.

//Após todos os alunos terem respondido informar: Maior e Menor Acerto; Total de Alunos que utilizaram o sistema; A Média das Notas da Turma. Gabarito da Prova: 01 - A 02 - B 03 - C 04 - D 05 - E 06 - E 07 - D 08 - C 09 - B 10 - A

//Após concluir isto você poderia incrementar o programa permitindo que o professor digite o gabarito da prova antes dos alunos usarem o programa.

//sem usar vetor, ainda não entrei neste assunto!!

let continuar = true
let gabarito1 = "A"
let gabarito2 = "B"
let gabarito3 = "C"
let gabarito4 = "D"
let gabarito5 = "E"
let gabarito6 = "E"
let gabarito7 = "D"
let gabarito8 = "C"
let gabarito9 = "B"
let gabarito10 = "A"
let totacertos = 0
let contadorPessoas = 0
let maiorAcertos =  Number.MIN_SAFE_INTEGER
let menorAcertos = Number.MAX_SAFE_INTEGER


while (continuar){

    totacertos = 0

    for(let i = 1; i<=10; i++){

        

        let opcao = window.prompt("Informe a sua opção de escolha para questão " + (i) + " da prova:").toUpperCase()
        
        if(i === 1){
    
            if (opcao === gabarito1){
    
                totacertos++
              
            }
        }
        if(i === 2 ){
    
            if(opcao === gabarito2){
                totacertos++
           
            }
        }
        if(i === 3 ){
    
            if(opcao === gabarito3){
                totacertos++
                
            }
        }
        if(i === 4 ){
    
            if(opcao === gabarito4){
                totacertos++
              
            }
        }
        if(i === 5 ){
    
            if(opcao === gabarito5){
                totacertos++
              
            }
        }
        if(i === 6 ){
    
            if(opcao === gabarito6){
                totacertos++
                
            }
        }
        if(i === 7 ){
    
            if(opcao === gabarito7){
                totacertos++
              
            }
        }
        if(i === 8 ){
    
            if(opcao === gabarito8){
                totacertos++
               
            }
        }
        if(i === 9 ){
    
            if(opcao === gabarito9){
                totacertos++
               
            }
        }
        if(i === 10 ){
    
            if(opcao === gabarito10){
                totacertos++
                
            }
        }
        
    }

    console.log("O total de acertos da " + (contadorPessoas+ 1) + " ª pessoa obteve " + totacertos + " acertos")

    if(totacertos > maiorAcertos){
        maiorAcertos = totacertos 
    }
    if(totacertos < menorAcertos){
        menorAcertos = totacertos  
    }

    let resposta = window.prompt("Outro aluno utilizará o sistema ? (sim/não) ").toLowerCase()
    if(resposta !== "sim" ){
    
        continuar = false
    }; 

    contadorPessoas++
}
console.log("O total de pessoas que utilizaram o sistema foi " + contadorPessoas + " pessoas")
console.log("A maior nota foi de " + maiorAcertos + " acertos")
console.log("A menor nota foi de " + menorAcertos + " acertos")
