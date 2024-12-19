function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 23 //teste da hora
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = '/ex01/img/manha.png'
        document.body.style.background = '#fee4bf'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = '/ex01/img/tarde.png'
        document.body.style.background = '#cf9f5f'
    } else {
        //BOA NOITE
        img.src = '/ex01/img/noite.png'
        document.body.style.background = '#2f7fb4'
    }
}

