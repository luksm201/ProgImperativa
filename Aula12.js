
/* Mesa de Trabalho 12*/



const alicia = [23, 69, 43]
 const bob = [24, 69, 43]
 
 function encontrarGanhador (a, b) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;
    for (let i=0; i < a.length; i++)
    {
        if (a[i] > b[i])
        {
            pontosPrimeiroParticipante++
        }
        if (a[i] < b[i])
        {
            pontosSegundoParticipante++
        }
    }
    if (pontosPrimeiroParticipante > pontosSegundoParticipante)
    {
        return "O ganhador é a Alicia"
    }
    if (pontosPrimeiroParticipante < pontosSegundoParticipante)
    {
        return "O Ganhador é o Bob"
    }
    if (pontosPrimeiroParticipante === pontosSegundoParticipante)
    {
        return "Deu empate!"
    }

}

console.log(encontrarGanhador (alicia, bob))

/* Bônus */

function digitalHouse(num1, num2)
{
    for (let i=1; i<=100; i++)
    {
        if ((i % num1) === 0 && (i % num2) === 0)
        {
            console.log("Digital House")
        }
        else if ((i % num1) === 0)
        {
            console.log("Digital")
        }
        else if ((i % num2) === 0)
        {
            console.log("House")
        }
        else 
        {
            console.log(i)
        }
    }
}

digitalHouse(2,5)

/* Segundo Desafio */ 

