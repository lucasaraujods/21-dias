//Escreva um programa que peça ao usuário para inserir uma senha. Enquanto a senha inserida estiver incorreta, o programa deve solicitar ao usuário para tentar novamente. A senha correta deve ser definida no próprio código.

let senha = (window.prompt("Informe a sua senha de acesso"))
let senhaCorreta = "Mengãodetiteembalado2024"

while(senha != senhaCorreta){

     senha = (window.prompt("Informe a sua senha de acesso novamente"))

}
document.write("Acesso desbloqueado, a senha está correta!! ")