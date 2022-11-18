function tabuada() {
    var num = document.getElementById('txtnumber')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        alert('Caixa vazia, favor tentar novamente')
    } else {
        tab.innerHTML = ''
        let n = Number(num.value)
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}



