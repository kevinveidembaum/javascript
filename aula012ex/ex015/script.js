
function carregar() {
    var msg = document.querySelector('div#msg')
    var msg2 = document.querySelector('div#msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas.`

    if (hora >= 0 && hora < 5) {
        //BOA MADRUGADA
        img.src = 'imagens/madrugada.png'
        document.body.style.background = 'var(--madrugada)'
        msg2.innerHTML = "Boa Madrugada"
    } else if (hora >= 5 && hora < 12){
        //BOM DIA
        img.src = 'imagens/manha.png'
        document.body.style.background = 'var(--manha)'
        msg2.innerHTML = "Bom Dia"
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = 'var(--tarde)'
        msg2.innerHTML = "Boa Tarde"
    } else if(hora > 18 && hora <= 23){
        //BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = 'var(--noite)'
        msg2.innerHTML = "Boa Noite"
    } else {
        msg.innerHTML = '[Error] Horário Inválido'
    }
}