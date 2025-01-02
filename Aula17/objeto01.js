/* let amigo = {}
console.log(typeof amigo) */

let amigo = {nome: 'josé',
    sexo:'m',
    peso: '85.4',
    engordar(p=0){
        console.log('Engordou!')
        this.peso += p
    }
}
console.log(amigo)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)

amigo.engordar(2)

console.log(`${amigo.nome} engordou, pesa gora, ${amigo.peso}Kg.`)