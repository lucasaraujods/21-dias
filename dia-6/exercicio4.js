let numero= parseInt(prompt("informe o número para saber sua tabuada"))
for( let i = numero; i<=numero+2;i++)
{
    console.log(" tabuada do número " + i)
    for(let j = 0; j<=10; j++)
    {
        console.log(i + "x" + j + "=" + (i*j))
    }
}