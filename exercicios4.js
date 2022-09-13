const prompt = require('prompt-sync')();

let i =0 ;
let qtcalmas
let qtnervosas
let qtagressivos
let qtoutroscalmos
let qtdnervosos40
let qtdcalmos18

while(i<3){
    const idadeText = prompt('digite sua idade');
    const idade = Number(idadeText)
    i++
    console.log('escolha o sexo entre: \n\n')
    console.log('1 - homen')
    console.log('2 - mulher')
    console.log('3 - outros')
    const sexoText =Number (prompt ('escolha o sexo'))
    console.log('escolha um humor\n\n')
    console.log('1 - calmo')
    console.log('2 - nervoso')
    console.log('3 - agressivo')
const humorText = prompt( 'escolha o opçao de humor')
const humor = Number(humorText)
    if ( humor == 1){
        qtdcalmos++;

    }
    if ( sexo == 2 && humor ==2){
        qtdcalmos++
    }
    if( sexo == 1 && idade == 3){
        qtagressivos++

    }
    if (sexo == 3 && humor == 1 ){
        qtcalmas++
    }
    if (humor == 2 && > 40){
        qtdnervosos40++

    }
    if (humor == 1 && idade <18){
        qtdcalmos18++
    }

    cont++
}
    console.log(`\n total de pessoal agressivos ${qtagressivos}`)
    console.log(`\n total de pessoal calmas ${qtcalmas}`)
    console.log(`\n total de pessoal calmas18 ${qtdcalmos18}`)
    console.log(`\n total de pessoal calmas40 ${qtdnervosos40}`)
    console.log(`\n total de pessoal outroscalmos ${qtoutroscalmos}`)
    console.log(`\n total de pessoal calmos ${qtdcalmos}`)
    




