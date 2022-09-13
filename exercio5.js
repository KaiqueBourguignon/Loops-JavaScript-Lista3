const prompt = require ('prompt-sync')();
let soma = 0 ;
let  numero1 = 0
let numero = Number(numero1)

do {
  numero1 = prompt ('digite um numero :');
  numero = Number(numero1)
  soma +=numero
  } while (numero != 0);
  console.log(`soma e igual : ${soma}`)