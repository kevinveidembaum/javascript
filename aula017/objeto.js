let pessoa = {
    nome: 'Marcos',
    sexo: 'M',
    idade: 10,
    envelhecer(i=0){
        console.log('Envelheceu')
        this.idade += i
    }
}

pessoa.envelhecer()
console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`)