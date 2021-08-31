
let exemploArray = ["Texto1", "Texto2"]
console.log(exemploArray.length)

/* Acessar um elemento especifico de um array */

console.log(exemploArray[0].indexOf("x"))

/* Modificar cada um dos elementos de um array e imprimi-los no console */
exemploArray[0] = "qualquer valor"
console.log(exemploArray)

/* Adicionar elementos de um array */
console.log(exemploArray.push("Texto3"))
console.log(exemploArray)

/* Extrair elementos de um array  */

console.log(exemploArray.pop())
console.log(exemploArray)

/* Comparar elementos de um array com os elementos de outro */

let exemploArray2 = ["qualquer valor", "Texto1"]

if (exemploArray[0] === exemploArray2[0])
{
    console.log("Elemento igual")
}
else 
{
    console.log("Não é igual")
}

/* Operador ternário */
console.log(exemploArray[0] === exemploArray2[0] ? "Igual": "Diferente" )

/* O que esses codigos retornam? */

let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])


let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])

let str = "una string qualquer"
grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])

console.log(grupoDeAmigos[2][5])


/* Imprimir Reverso */

function imprimirInverso(qualquerArray)
{
    for (let i=qualquerArray.length; i >= 0; i--)
    {
        console.log(qualquerArray[i])
    }
}

imprimirInverso(grupoDeAmigos)

function inverter (qualquerArray)
{
    let temp = []
    for (let i=qualquerArray.length - 1; i >= 0; i--)
    {
        temp.push(qualquerArray.pop())
    }

    console.log(temp)
}

inverter(grupoDeAmigos[2])
