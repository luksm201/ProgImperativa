


 function Aluno(nome, quantidadeFaltas, notas)
    {
        this.nome = nome;
        this.quantidadeFaltas = quantidadeFaltas;
        this.notas = notas;
        this.calcularMedia = function()
            {
                let total = 0;
                let i = 0;
                for (i = 0; i < this.notas.length; i++)
                {
                    total = total + this.notas[i];
                }
                return total / i;  
            };
        this.faltas = function()
        {
            this.quantidadeFaltas+= 1;
        };
    }


let aluno1 = new Aluno("Ronaldo", 0, [7.6, 5.4, 8.9])
let aluno2 = new Aluno("Lucas", 1, [9.7, 8.9, 10])
let aluno3 = new Aluno("Emerson", 5, [5.7, 6.4, 3.9])
let aluno4 = new Aluno("Raphael", 4, [2.6, 4.5, 6.3])
let aluno5 = new Aluno("Mário", 4, [8.6, 9.4, 7.9])

listaDeEstudantes = [aluno1, aluno2, aluno3, aluno4, aluno5]


module.exports = {
    Aluno: Aluno,
    listaDeEstudantes,
}

