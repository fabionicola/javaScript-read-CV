let num = [2, 3, 5, 8]

num[4] = 9

num.push(7)

//num.length - tamano do vetor
//num.sort() - organiza os elementos em ordem crescente

console.log(`Nosso vetor é o ${num}`)
console.log(`Vetor tem ${num.length} elementos`)
console.log(`O valor no indice 0 é ${num[0]}`)

num.push(1)
num.sort()
console.log(`O vertor organizado é ${num}`)

for (let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)    
}

for (let pos in num) {
    console.log(`${num[pos]}`)
}

let pos  = num.indexOf(7)
console.log(`O valor 7 está na posição ${pos}`)