/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/

let agora = new Date()
let diaSem = agora.getDay()                 

console.log('Hoje é exatamente')

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default: 
        console.log('[ERROR] Dia Inválido')
        break
    
}

if (diaSem == 5) {
    console.log('Sextou!! Hoje é dia de maldade')
}else if (diaSem == 6 || diaSem == 0){
    console.log('Hoje é dia de descanço.')
} else if (diaSem == 1){
    console.log('Segundou, mas que desgraça!!')
} else if(diaSem == 3){
    console.log('Pelo menos já é metade da semana')
}

