function conferir() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    if (hora > 0 && hora <= 12) {
        img.src = 'manha.png'
        document.body.style.background = '#a8a981'
    } else if (hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#f3ad8b'
    } else {
        img. src = 'noite.png'
        document.body.style.background = '#362b49'
    }
}