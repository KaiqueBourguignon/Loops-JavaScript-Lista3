const prompt = require('prompt-sync')();

let soma = 0 ;
let numero
let media = 0
let count = 0

do {
  numero1 = prompt ('digite um numero :');
  numero = Number(numero1)
if( numero % 3 == 0 && numero!= 0){
    soma = soma + numero
    count++
    media=soma/count
}
  

} while (numero != 0){
    console.log(`a media dos numeros sao : ${media}`)
  
  }