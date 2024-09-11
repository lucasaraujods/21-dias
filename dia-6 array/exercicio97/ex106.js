//1 - Crie 2 arrays: um para nomes e um para senhas
//2- Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa.
//3 - Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as opções.
//4 - Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.
//5 - Se a opção escolhida for login solicite ao usuário um nome e uma senha, depois procure o nome recebido no array de nomes e em caso positivo compare a senha no array de senhas. Se as duas comparações forem válidas exiba uma mensagem de sucesso
//6 - Se a opção escolhida for excluir um cadastro solicite um nome ao usuário, então procure pelo nome no array de nomes e exclua ele e a senha correspondente do outro array, por fim organize o array para eliminar os espaços vazios.

let arrayNome = []
let arraySenha= []
let contador = 0
let opcao = ""
let continuar = true

while(continuar){

    opcao = prompt("Informe qual opção deseja. cadastro, login, excluir ou encerrar o programa ")

    switch(opcao){

        case "cadastro":
    
            let nome = prompt("Informe o seu nome")
            let senha = prompt("Informe a sua senha")
            arrayNome[contador] = nome 
            arraySenha[contador] = senha

            contador++ 
        break;
    
        case "login":
    
            nome= prompt("informe o seu nome: ")
            senha = prompt("informe a senha:")
            let loginValido = false

            
            for(let i= 0; i < arrayNome.length; i++){

                
                if((nome === arrayNome[i]) && (senha === arraySenha[i])) {
    
                    loginValido = true
                }

            }
    
            if(loginValido){

                alert("Sucesso")
            }else{

                alert("Senha incorreta ou login incorreto ")
            }
        break;

        case "exluir":

            let nomesAux = []
            let senhaAux =[]
            let contadorAux = 0

            let nomeExcluir =  prompt("informe o nome que deseja excluir")

            for(let i= 0; i< contador; i++){

                if(nomeExcluir === arrayNome[i]){

                    alert("cadastro excluido com sucesso!!")
                }
                else{
                    nomesAux[contadorAux] = arrayNome[i]
                    senhaAux[contadorAux] = arraySenha[i]
                    contador++ 
                }
            }

            arrayNome = nomesAux
            arraySenha = senhaAux
            contador--

        break;
         
        case "encerrar":
            continuar = false
            console.log("O programa foi encerrado")
        break;

        default:
            console.log("A opção escolhida não é adequada")
        break
    }
}
