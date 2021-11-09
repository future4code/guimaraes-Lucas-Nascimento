// Exercicio 1
const nome = prompt("Qual o seu nome?")
const idade = prompt("Qual a sua idade?")

console.log(typeof nome, typeof idade)
// Resposta letra (D): Aconteceu um erro de syntaxe porque não foi definida uma variavel,
// sendo assim o typeof não teve como reconhecer o tipo de variavel.

//Resposta letra (F): Com a declaração das variaveis utilizando o prompt foi atribuido valores as duas variaveis,
// dessa forma o typeof informou no console o tipo de cada uma.

// (G)

console.log("Olá", nome, "você tem", idade, "anos.")


/*----------------------------------------------------*/

// Exercicio 2

const cafeDaManha = prompt("Você tomou café da manha hoje?")
const almoco = prompt("Você almoçou hoje?")
const cafeDaTarde = prompt("Você tomou café da tarde hoje?")

const TomeiCafeDaManha = true   
const almocei = false   
const TomeiCafeDaTarde = false

console.log("Você tomou café da manha hoje?", TomeiCafeDaManha)
console.log("Você almoçou hoje?", almocei)
console.log("Você tomou café da tarde hoje?", TomeiCafeDaTarde)

// Exercicio 3

let a = 10
let b = 25
let c 

c = b
b = a
a = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// Desafio

let numeroA = prompt("Digite um numero:")
let numeroB = prompt("Digite outro numero:")

numeroA = Number(numeroA)
numeroB = Number(numeroB)

console.log(numeroA + numeroB)
console.log(numeroA * numeroB)

