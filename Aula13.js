
function Banco(conta, tipo, saldo, titular)
{
    this.conta = conta
    this.tipo = tipo;
    this.saldo = saldo;
    this.titular = titular;
}

let conta1 = new Banco (5486273622,"Conta Corrente", 27771, "Abigael Natte");
let conta2 = new Banco(1183971869,"Conta Poupança", 8675, "Ramon Connell")
let conta3 = new Banco(9582019689,"Conta Poupança",	27363, "Jarret Lafuente")
let conta4 = new Banco(1761924656,"Conta Poupança",	32415, "Ansel Ardley")
let conta5 = new Banco(7401971607,"Conta Poupança",	18789, "Jacki Shurmer")
let conta6 = new Banco(630841470,"Conta Corrente", 28776, "Jobi Mawtus")
let conta7 = new Banco(4223508636,"Conta Corrente",	2177, "Thomasin Latour")
let conta8 = new Banco(185979521,"Conta Poupança", 25994, "Lonnie Verheijden")
let conta9 = new Banco(3151956165,"Conta Corrente",	7601, "Alonso Wannan")
let conta10 = new Banco(2138105881,"Conta Poupança", 33196, "Bendite Huggett")

let listaDeContas = []
listaDeContas.push(conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10)

//console.log(listaDeContas[1])

let banco = 
    {   clientes: listaDeContas, 
        consultarCliente: function (nome) 
        {
            for(conta of listaDeContas)
            {
                if (conta.titular === nome)
                {
                    return conta
                }
            }
        }, 
        deposito: function (nome, valor)
        {
            for(conta of listaDeContas)
            {
                if (conta.titular === nome)
                {
                    conta.saldo = conta.saldo + valor;
                    return console.log("Depósito realizado, seu novo saldo é:" + conta.saldo)
                }
            }

        }, 
        saque: function (nome, valor)
        {
            for(conta of listaDeContas)
            {
                if (conta.titular === nome)
                {
                    if ( (conta.saldo - valor) < 0 )
                    {
                        return console.log("Fundos Insuficientes")
                    }
                    else{
                        conta.saldo = conta.saldo - valor;
                        return console.log("Extração feita com sucesso, seu novo saldo é: " + conta.saldo)
                    }

                }
            }
        }
    }

console.log(banco.consultarCliente("Alonso Wannan"))
    
banco.deposito("Alonso Wannan", 1000)

banco.saque("Alonso Wannan", 9000)

banco.saque("Alonso Wannan", 8000)


// Bonussssssssssssssssss 

// Função Propriedade Unica

let array = [ { nome: "Lean", idade: 27 }, { nome: "Eze", idade: 49} ]

function propriedadeUnica (array, propriedade)
{
    let arrayModificado = []
    
    for (valor of array)
    {
        
        arrayModificado.push(Object.getOwnPropertyDescriptor(valor, propriedade))
    }
    return arrayModificado
}

console.log(propriedadeUnica(array, "idade"))

console.log(array[0])