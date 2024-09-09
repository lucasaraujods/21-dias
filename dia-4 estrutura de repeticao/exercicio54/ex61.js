//Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

let usuario = window.prompt("informe o nome do usuario")
let senha = window.prompt("informe a senha")

while(senha === usuario){
     
     senha = window.prompt("informe a senha diferente do nome do usuario")
}
console.log("A senha está atualizada, com sucesso!!")