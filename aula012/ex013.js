var agora = new Date()
let hora = agora.getHours()
 
console.log(`Agora são ${hora} horas, de acordo com o horário de Brasília.`)

if (hora < 5){
    console.log('Tenha uma Boa Madrugada!')
}else if (hora < 12){
    console.log('Tenha um Bom Dia!')
} else if(hora == 12){
    console.log("Tenha um Bom Meio Dia!")
} else if (hora <= 18){
    console.log('Tenha uma Boa Tarde!')
} else if (hora <= 24){
    console.log('Tenha uma Boa Noite!')
} else {
    console.log('Horário Inválido')
}


