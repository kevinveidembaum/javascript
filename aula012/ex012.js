var idade = 32

console.log(`Você tem ${idade} anos. E nesse caso, você tem:`)

if (idade < 16){
    console.log('Não Vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto Facultativo')
} else if (idade > 18) {
    console.log('Voto Obrigatório')
}

    
