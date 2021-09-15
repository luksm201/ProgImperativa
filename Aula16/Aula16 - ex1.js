

function imprimir (c, d)
{
    if (d == undefined){
        return console.log(c);
    }
    else return console.log(c+d);
}

let FizzBuzz = (a, b, c, d, callback) => {
    for (let i = 1; i<=100; i++)
    {
        if ((i % a) == 0 && (i % b) == 0)
        {
            callback(c, d);
        }
        else if ((i % a) == 0)
        {
            callback(c);
        }
        else if ((i % b) == 0)
        {
            callback(d);
        }
        else console.log(i);
    }
}

FizzBuzz(2, 3, "Digital", "House", imprimir)

//FizzBuzz(3, 5)



