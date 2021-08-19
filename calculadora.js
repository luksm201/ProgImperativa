function adicionar(x, y){
    return x+ y
}

function subtracao(x, y){
    return x - y
}

function multiplicacao(x, y){
    return x * y
}

function divisao(x, y){
    return x / y
}

console.log ("---------Teste de Operações / Calculadora -------")
let x= 50
let y = 4
console.log("Soma: x="+ x + " e y= " + y)
console.log(adicionar(x,y))
console.log("Subtracao: x="+ x + " e y= " + y)
console.log(subtracao(x,y))
console.log("multiplicação: x="+ x + " e y= " + y)
console.log(multiplicacao(x,y))
console.log("divisão: x="+ x + " e y= " + y)
console.log(divisao(x,y))
console.log("divisão: x="+ 0 + " e y= " + y)
console.log(divisao(0,y))
console.log("divisão: x="+ x + " e y= " + 0)
console.log(divisao(x,0))

function quadradoNumero(x){
    return multiplicacao(x, x)
}
console.log("quadrado do numero 10:" + quadradoNumero(10))

function mediaTresNumeros(x, y, z){
    let soma = adicionar(x, y)
    soma = adicionar(soma, z)
    return divisao(soma, 3)
}
console.log("media de 5,10,15 é:" + mediaTresNumeros(5,10,15))

function calculaPorcentagem(x, y){
    return x*divisao(y,100)
}
console.log("15% de 450 é:" + calculaPorcentagem(450,15))

function geradorDePorcentagem(x, y){
    return divisao(x,y)*100
}
console.log("40 sobre 150 são:" + geradorDePorcentagem(40,150)+ "%")
