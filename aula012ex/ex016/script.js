function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança homem
                img.setAttribute('src', 'imagens/bebe-h.png')
                document.body.style.background = '#313F4B'
            } else if (idade < 25){
                //jovem homem
                img.setAttribute('src', 'imagens/jovem-h.png')
                document.body.style.background = '#9D1F23'
            } else if (idade < 50) {
                //adulto homem
                img.setAttribute('src', 'imagens/adulto-h.png')
                document.body.style.background = '#010101'
            } else {
                //idoso homem
                img.setAttribute('src', 'imagens/idoso-h.png')
                document.body.style.background = '#727374'
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança mulher
                img.setAttribute('src', 'imagens/bebe-m.png')
                document.body.style.background = '#0E7389'
            } else if (idade < 25){
                //jovem mulher
                img.setAttribute('src', 'imagens/jovem-m.png')
                document.body.style.background = '#B1A9A6'
            } else if (idade < 50) {
                //adulto mulher
                img.setAttribute('src', 'imagens/adulto-m.png')
                document.body.style.background = '#573E31'
            } else {
                //idoso mulher
                img.setAttribute('src', 'imagens/idoso-m.png')
                document.body.style.background = '#A9846B'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi constatado um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }


}