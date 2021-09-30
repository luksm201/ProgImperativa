
let alunos = require('./dadosAlunos')

let curso  = {
    nomeDoCurso: 'CID',
    notaDeAprovacao: 8,
    faltasMaximas: 5,
    listaEstudantes: alunos.listaDeEstudantes, 
    adicionarAluno: function(nome, falta, nota)
    {
        let novoAluno = new alunos.Aluno(nome, falta, nota);
        this.listaDeEstudantes.push(novoAluno);
    }, 
    aprovacao: function(nomeAluno)
    {
        for (aluno of this.listaEstudantes)
        {
            if (aluno.nome === nomeAluno)
            {
                if (aluno.calcularMedia() >= this.notaDeAprovacao && aluno.quantidadeFaltas < this.faltasMaximas)
                {
                    return true;
                }
                else if (aluno.quantidadeFaltas === this.faltasMaximas && aluno.calcularMedia() >= this.notaDeAprovacao*1.1)
                {
                    return true;
                }
                else {return false}
            }
        }
        return "Aluno não encontrado";
    },
    listaAprovacao: function ()
    {
        let aprovados = []
        for (aluno of this.listaEstudantes)
        {
            
            if (aluno.calcularMedia() >= this.notaDeAprovacao && aluno.quantidadeFaltas < this.faltasMaximas)
            {
                aprovados.push(true);
            }
            else if (aluno.quantidadeFaltas === this.faltasMaximas && aluno.calcularMedia() >= this.notaDeAprovacao*1.1)
            {
                aprovados.push(true);
            }
            else {aprovados.push(false);}
        }
        return aprovados
    }
}


console.log(curso.aprovacao('Ronaldo'))
console.log(curso.aprovacao('Lucas'))
console.log(curso.aprovacao('Emerson'))
console.log(curso.aprovacao('Raphael'))
console.log(curso.aprovacao('Mário'))

console.log(curso.listaAprovacao())