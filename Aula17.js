
// Exercicio 1 - uso do .map ********//
let pares = [2, 4, 6, 8, 10, 12]

impares = pares.map(
    function (num)
    {
        return num+1
    }
)

console.log(impares)

// Exercicio 2 - uso do .filter ********//

let nomes = ['Lucas', 'José', 'Roberto', 'Maria', 'Antonio', 'Maria']
var indexes = []
nomesFiltrados = nomes.filter(
    function (nome, index)
    {
        if (nome == 'Maria')
        {
            indexes.push(index)
        }
        return nome == 'Maria'
    }
    )

nomesFiltrados
console.log(indexes)

// Exercicio 3 - uso do .reduce ********//

numeros = [1, 5, 9, 3, 7]

numerosAgrupados = numeros.reduce(
    function (acumulador, atual)
    {
        return acumulador + '-' + atual
    }
)

console.log(numerosAgrupados)

// Exercicio 4 - uso do forEach ******//

animais = ['Cachorro', 'Gato', 'Pato', 'Leão', 'Alpaca', 'Ornitorrinco']

animais.forEach(animal => console.log("O nome do animal é " + animal))