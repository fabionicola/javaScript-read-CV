function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert(`[Erro] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', '/ex02/img/bebe-h.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '/ex02/img/jovem-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '/ex02/img/adulto-h.png')
            } else {
                //idoso
                img.setAttribute('src', '/ex02/img/idoso-h.png')
            }             
                         
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', '/ex02/img/bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '/ex02/img/jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '/ex02/img/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', '/ex02/img/idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br/>`
        res.appendChild(img)
    }
}