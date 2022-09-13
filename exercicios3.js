const prompt = require('prompt-sync')();

let count = 0 
let count1 = 0
let  idade1 = 0
let idade = Number(idade1)

while (idade != -99) {
    idade = prompt ('digite sua idade: ') 
     

    if (idade < 21){
    count++
    }
    else if (idade > 50){
        count1++ 
    }
       
}
console.log(`menor que 21 : ${count}`)
console.log(`maior que 50 :  ${count1}`)

  

