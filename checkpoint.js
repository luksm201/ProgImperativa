/* Grupo 1
Allan Medeiros
Ezio Lorenzetti
Gabriella Gomes
Lucas Alcântara
Lucas Mota Barbosa
Rodrigo da Silva
 */

/*
Opções
[ 1 ] - Pipoca – 10 segundos (padrão);
[ 2 ] - Macarrão – 8 segundos (padrão);
[ 3 ] - Carne – 15 segundos (padrão);
[ 4 ] - Feijão – 12 segundos (padrão);
[ 5 ] - Brigadeiro – 8 segundos (padrão); */

function microondas (opcao,tempo){
    let prato;
    let padrao;
    switch(opcao){
    case 1:
        prato = "Pipoca";
        padrao = 10;
     
        break;
    case 2:
        prato = "Macarrão";
        padrao = 8;
   
        break;
    case 3:
        prato = "Carne";
        padrao = 15;

        break;
    case 4:
        prato = "Feijão";
        padrao = 12;

        break;
    case 5:
        prato = "Brigadeiro";
        padrao = 8;

        break;

    default: console.log("O prato não existe.")
    }
    if ((tempo<=((2*padrao)-1)) && tempo>=padrao){console.log("Prato pronto, bom apetite!")}
    else if (tempo>=(3*padrao)){console.log("Kabuuuumm!!!")}
    else if (tempo>=(2*padrao)){console.log("O prato queimou.")}
    else if (tempo<padrao){console.log("Tempo insuficiente.")}
}

microondas(6,14)