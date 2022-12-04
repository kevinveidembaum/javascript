console.log('Primeiro Vetor')
let valor = [6, 3, 8, 6, 7]
console.log(valor)

valor.sort()
console.log('Organizando de forma crescente temos:')
for(let pos = 0; pos< valor.length; pos++){
    console.log(`Na posição ${pos} tem o valor ${valor[pos]}`)
}

console.log('Segundo Vetor')
let alfabeto = ['a', 'k', 't', 'w', 'e']
console.log(alfabeto)

alfabeto.sort()
console.log('Organizando de forma crescente temos:')
for(let indice in alfabeto){
    console.log(`Na posição ${indice} tem o valor ${alfabeto[indice]}`)
}





