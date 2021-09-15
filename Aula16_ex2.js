
// com o for

// fatorial: n! = n*(n-1)*(n-2)....1

// 5! = 5*4*3*2*1 = 120

function fatorial_comfor (n)
{
    var fatorial = 1;
    for (let i = n; i >= 1; i--)
    {
        fatorial*=i;
    }
    return console.log(fatorial)
}

fatorial_comfor(5)

// sem o for, com recursividade

// fatorial = fatorial(n)*fatorial(n-1)*fatorial...fatorial(1)

function fatorialRecursivo (n)
{
    if (n <= 1) 
    {
        return 1
    }

    return n * fatorialRecursivo (n-1)
}

// fatorial(5) 
//= n * fatorial(4) 
// = 5 * 4 * fatorial (3)
// = 5 * 4 * 3 * fatorial (2) 
// = 5 * 4 * 3 * 2 * fatorial (1)
// = 5 * 4 * 3 * 2 * 1

console.log(fatorialRecursivo(5))