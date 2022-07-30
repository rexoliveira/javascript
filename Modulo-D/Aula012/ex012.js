let hora = new Date().getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (Number(hora) < 12 && Number(hora) > 00) {
    console.log('Bom Dia!')
} else if (Number(hora) < 19 ){
    console.log('Boa tarde!')
}else{
    console.log('Boa Noite!')
}