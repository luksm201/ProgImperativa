
/* Converter para Maiuscula  */

let peliculas = ["star wars", "totoro",  
"rocky", "pulp fiction",  "la vida es bella"]

function converterParaMaiscula (array){

    for (let i=0; i<array.length; i++)
    {
        array[i] = array[i].toUpperCase()
    }
    
    return array
}

console.log(converterParaMaiscula(peliculas))

/* Passar conteudo para outro array    */

let array1 = []

console.log(peliculas.length)

function passagemDeElementos (array1, array2)
{
    let tamanho = array2.length
    for (let i = 0; i < tamanho; i++)
    {
        array1.push(array2.pop().toUpperCase()) 
    }
    
    return array1
}

console.log(passagemDeElementos(array1, peliculas))


/* Retirar totoro */
peliculas = ["star wars", "totoro", "rocky", "pulp fiction",  "la vida es bella"]
var infiltrado = ""

function filtrarePassarElementos (array2)
{
    let array=[]
    let tamanho = array2.length
    for(let i=0; i < tamanho; i++)
    {
        if (array2[i] == "totoro")
        {
            infiltrado = "totoro"
            continue
        }
        array.push(array2[i])
    }
    return array
}
console.log(infiltrado)
console.log(filtrarePassarElementos(peliculas))