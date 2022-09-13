const prompt = require ('prompt-sync')();

    let impar = 0 
    let count = 0
    let numero1 
    let numero = Number(numero1)

        for (let i = 1 ; i <=10 ; i ++){
             const numero = prompt ('digite um numero:  ')
        if (numero % 2 == 0 ) {
            count++
        }
        else  {
         impar++ 
     } 
}
            console.log(`total de numero pares :  ${count}`)
            console.log(`numero impares :  ${impar}`)




