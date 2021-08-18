

function converterPolegadas(num=1){
    return console.log(num*2.54)
}
converterPolegadas(5)

function criaURL(nome="teste"){
    return console.log("http://www."+nome+".com.br")
}
criaURL()

function exclamacao(valor = "Esta frase é um teste"){
    return console.log(valor+"!")
}
exclamacao("Lucas Mota Barbosa da Silva")

function idadeCachorro(idade){
    return console.log(idade*7)
}
idadeCachorro(26)

function horaTrabalho(salario){
    return console.log("R$/hr de trabalho: "+ salario/160)
}
horaTrabalho(2500)

function IMC(peso, altura){
    let imc = peso/((altura/100)**2)
    return console.log("Seu IMC é: "+ imc.toFixed(2) )
}
IMC(62,168)

function aumentaString(texto = "teste"){
        return console.log( texto.toUpperCase())
}
aumentaString("este é um teste")

function tipoDado(dado){
    return console.log("O tipo de dado informado é: " + typeof(dado))
}
tipoDado("este é um teste")

function circunferencia(raio){
    let comprCircunferencia = 2*Math.PI*raio
    return console.log("O comprimento da circunferência é: " + comprCircunferencia.toFixed(2))
}
circunferencia(10)






