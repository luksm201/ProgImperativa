

function fibo (n)
{
    if (n < 0)
    {
        return "Inválido"
    }
    if (n == 0 || n == 1)
    {
        return 1
    }
    return fibo(n-1) + fibo(n-2)
}

var fibonacci = function(n) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

console.log(fibonacci(100))