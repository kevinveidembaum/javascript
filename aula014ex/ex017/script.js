function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    //campo vazio
    alert('[ERROR] Favor preencher todos os campos')
    res.innerHTML = 'Não foi possível realizar a contagem!'
   } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('PASSO inválido! Considerando Passo = 1')
            p = 1
        }
            if (i < f) {
                //contagem crescente
                for (let c = i; c <= f; c += p) {
                    res.innerHTML += ` ${c} \u{1F449} `
                }
            } else {
                for (let c = i; c >= f; c-= p){
                    //contagem regressiva
                    res.innerHTML += `  ${c} \u{1F449} `
                }
            }
            res.innerHTML += `\u{1F3C1}`
    }
        
}

/*
Primeira tentativa

        for (inicio.value; inicio.value <= fim.value; Number(inicio.value) + Number(passo.value)) {
            res.innerHTML = inicio 
        
            */