

//***** Programação Imperativa*****//

        //***** Aula 8 *****//


// podeSubir(altura da pessoa, está acompanhada: sim ou não)

function podeSubir(altura, acompanhada)
{
    if (altura >=1.4 && altura < 2)
    {
        return "Acesso autorizado";
    }
    else if (altura < 1.4 && altura >=1.2)
    {
        if (acompanhada)
        {
            return "Acesso autorizado somente com acompanhante";
        }
        else return "Acesso negado"
    }
    else if (altura < 1.2)
    {
        return "Acesso negado";
    }
}

console.log(podeSubir(1.39, true))


