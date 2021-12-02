// Exercicios de Interpretação de codigo

/* 1 - 
    O codigo está incremetando valores a medida que se repete e seu valor final será 10.


   2 - 
   a)
     Séra impresso no console os números do array que são maiores que 18. [19, 21, 23, 25, 27, 30]
  
   b) 
     Pode ser usado o for...of, usando let numero of lista e logo em seguida chamando a variavel numero no console.log


  3 - 
    Sera impresso 4 linhas juntamente com asteriscos Ex: *
                                                         **
                                                         ***
                                                         ****
    */

 /*-------------------Exercicios de Escrita de codigo----------------------------------*/

// 1 - 
const quantBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))

let arrayPets = []

if(quantBichinhos === 0) {
    console.log("Que pena! Voçê pode adotar um pet!")
}else if (quantBichinhos > 0) {
    for(let i = 0; i < quantBichinhos; i++) {
        let nomesPets = prompt('Digite o nome do seu pets um por um:');
        arrayPets.push(nomesPets);
    }
    console.log(arrayPets);
}else{
    console.log("Insira um nome válido.")
}

//2 -

let arrayOriginal = [20, 15, 25, 45, 80]

//a)
function imprimirValores (array) {
    for (let numero of array) {
        console.log(numero)
    }
}
imprimirValores(arrayOriginal)

//b)
function dividirValores (array) {
    for (let numero of array) {
        let divisao = numero / 10
            console.log(divisao)
    }

}
dividirValores(arrayOriginal)

//c) 
let valoresPares = []

const valorParArray = (array) => {
    for (let i in array) {
        if(array[i] % 2 ===0){
            let pares = array[i]
            valoresPares.push(pares)
        }
    }
}
valorParArray(arrayOriginal)
console.log(valoresPares)

//d)

let arrayString = []

const valorArray = (array) => {
    for(let i in array){
        let string = 'O elemento do Index ' + i + ' é ' + array[i]
        arrayString.push(string)
    }
}

valorArray(arrayOriginal)
console.log(arrayString)

//e) 

let valorMaximo = Math.max(...arrayOriginal)
let valorMinimo = Math.min(...arrayOriginal)
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)

