function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenth == 0) {
        //alert('[Erro] Faltam dados!!!')
        res.innerHTML = 'Impossível contar! Confira os Dados'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c+=p) {
                res.innerHTML += ` ${c} \u{1F449}`   
            }
        } else {
            //contagem decrescente
            for (let c = i; c >= f; c-=p) {
                res.innerHTML += ` ${c} \u{1F449}`   
            }
            
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}