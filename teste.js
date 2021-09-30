

let array = [0,9,4,7,128,42,-1,301,-5]

let num = 2

function buscaDivisivelPor (array, num)
{
    for (valor of array)
    {
        if ( valor != 0 && (valor % num) == 0 )
        {
            return console.log(valor);
        }
    }
    return console.log("Nenhum número válido encontrado!");
}

buscaDivisivelPor(array, num)