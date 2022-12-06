let num = document.querySelector('input#numtxt')
let lista = document.querySelector('select#caixa')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[1]
        let soma = 0
        let media = 0
        
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, foram cadastrados ${total} valores.</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}.</p>`
        res.innerHTML +=`<p>O total da soma de todos os valores é ${soma}</p>`
        res.innerHTML +=`<p>A média dos valores cadastrados é ${media}</p>`
    }
}

/*
function analise() {
    var num = document.getElementById('numtxt')
    var adic = document.getElementById('btn1')
    var final = document.getElementById('btn2')
    if (num.ariaValueMax.length == 0){
        alert('Por favor preencha os dados!')
    }
}
*/