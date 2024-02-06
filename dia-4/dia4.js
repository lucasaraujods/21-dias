let fome= ""
let restaurante= ""
let dinheiro= ""

fome= prompt("Você está com fome? Responda com sim ou não")
dinheiro= prompt("Você tem dinheiro neste momento? responda com sim ou não")
restaurante= prompt("O restaurante está aberto ou fechado?")
if((fome==="sim") && (dinheiro==="sim") && (restaurante==="aberto"))
{
    console.log("Hoje o jantar será no seu restaurante preferido")
} 
else if ((fome==="sim") && (dinheiro==="sim") || (restaurante==="fechado"))
{
    console.log("Peça um delivery")
} 
else
{
    console.log("O jantar hoje será em casa")
}