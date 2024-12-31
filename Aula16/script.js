function parimp(n) {
    if (n % 2 == 0) {
        return `o número ${n} é par`
    } else {
        return `o número ${n} é impar`
    }
}

console.log(parimp(12))

function soma(n1=0, n2=0) {
    return n1+n2
}

console.log(soma(2, 5))

let v = function (x) {
    return x*2
}

console.log(v(5))

//5! = 5 x 4 x 3 x 2 x 1 = 120
function fatorial(n) {
    let fat = 1
    for (let i = n; i > 1; i--){
        fat *= i
    }
    return fat
}

console.log(`O fatorial de 5 é ${fatorial(5)}`)

//recursividade

//5! = 5 x 4 x 3 x 2 x 1 = 120
//5! = 5 x 4!

//n! = n x (n-1)!
//1! = 1

function fatorial2(n1) {
    if (n1 == 1) {
        return 1        
    } else {
        return n1 * fatorial2(n1-1)
    }
}

console.log(fatorial2(5))