function carregar() {
    var fundo = document.querySelector('#fundo')
    var header = document.getElementsByTagName('h1')[0]
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes("mm")
    var msg2 = ''


    if (hora > 0 && hora < 12) {
        msg2 = 'Bom dia!'
        img.src = 'image/manha.jpg'
        fundo.style.background = '#F0C101'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 19) {
        msg2 = 'Boa Tarde!'
        img.src = 'image/tarde.jpg'
        fundo.style.background = '#1C98F0'
        document.body.style.background = '#b9846f'
    } else {
        msg2 = 'Boa Noite!'
        img.src = 'image/noite.jpg'
        fundo.style.background = '#334661'
        document.body.style.background = '#515154'
        msg.style.color = 'white'
        header.style.color = 'white'
    }

    msg.innerHTML = `Agora é ${hora}:${min}. ${msg2}`
}

