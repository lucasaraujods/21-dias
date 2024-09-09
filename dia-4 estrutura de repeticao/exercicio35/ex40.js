//Contrua um algoritimo para um pequeno game no qual o jogador entra com um número e o outro jogadro deve advinhar o número informado
//as regras são: 
//1-o algoritimo deve pedir ao jogador desafiante para informar um valor númerico 
//2-na sequencia o algoritimo deve pedir para o jogador desafioado informar um valor        
//a) se o valor informado for igual ao valor do desafiante, o algoritimo deve exibir a mesnagem de sucesso, caso se o valor for diferente o sistema deve informar que está incorreto e deve pedir um novo valor

let numeroDesafiante = parseInt(window.prompt("Informe o número do desafiante de 1 a 10"))
let numeroDesafiado = parseInt(window.prompt("Informe o seu número de 1 a 10, desafiado "))

while(numeroDesafiante != numeroDesafiado){
    numeroDesafiado=parseInt(window.prompt("Informe o outro número, desafiado:  "))
}
document.write("Você acertou!")
