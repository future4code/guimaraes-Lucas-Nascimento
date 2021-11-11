// Exercicios de interpretação de código

// 1.
//    a - false
//    b - false
//    c - false
//    d - boolean


// 2. 
//    A causa do problema foi por ele não converter as entradas do prompt para o tipo number.

// 3.
{
let primeiroNumero = Number(prompt("Digite um número:"))
let segundoNumero = Number(prompt("Digite outro número:"))

const soma  = primeiroNumero + segundoNumero

console.log(soma, typeof soma) // Coloquei um typeof so para garantir que retornou um valor do tipo numerico
}

/*---------------------------------------------------*/


// Exercicios de escrida de codigo


// 1. 

// Pergunte a idade do usuario
// Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// imprima no console a seguinte mensagem: Sua idade é maior do que seu melhor amigo?, seguindo pela resposta (true or false)
// Imprima no console a diferença de idade (nao tem problema se sair um numero negativo)

const nomeUsuario = Number(prompt("Qual a sua idade?"))
const nomeAmigo = Number(prompt("Qual a idade do seu mellhor amigo(a)?"))

console.log("Sua idade é maior do que a do seu melhor amigo(a)?", nomeUsuario > nomeAmigo)

console.log("A diferança de idade entre os dois é de", nomeUsuario - nomeAmigo, "anos.")

// 2. 

// Peça ao usuario que insira um numero par
// imprima no console o resto da disisao desse numero por 2
// teste o programa com diversos numeros pares. voce notou um padrao? Escreva em um cometario de codigo
// o que acontece se o usuario inserir um numero impar? escreva em um cometario

const numeroPar = Number(prompt("Insira um numero par:"))

console.log(numeroPar % 2) 
// Sempre dara o resultado 0 pois se trata de um numero par
// Cenario em que o usario colocar um numero impar: Quando inserido um numero impar sempre vai retornar um valor que n seja zero pois se trata de um numero impar

// 3. 
//Faça um programa que pergunte ao usuario sua idade em anos. Depois, imprima no console
// a idade do usuario em meses
// a idade do usuario em dias
// a idade do usuario em horas

const idadeDoUsuario = Number(prompt("Qual a sua idade?"))

console.log("Sua idade em meses é:", idadeDoUsuario * 12, "meses." )
console.log("Sua idade em dias é:", idadeDoUsuario * 365, "dias.")
console.log("Sua idade em horas é:", idadeDoUsuario * 8760, "horas.")

//4.
/* Faça um programa que pergunte ao usuario dois numeros. 
em seguida, faça as operaçoes e imprima no console as seguintes mensagens seguidas pleo True ou false.*/

const n1 = Number(prompt("Digite um numero:"))
const n2 = Number(prompt("Digite outro numero:"))

console.log("O primeiro numero é maior que o segundo?", n1 > n2)
console.log("O primeiro numero é igual ao segundo?", n1 === n2)
console.log("O primeiro numero é divisivel pelo segundo?", (n1 % n2) === 0)
console.log("O segundo numero é divisivel pelo primeiro?", (n2 % n1) === 0)


/* ---------------------- DESAFIO ---------------------*/



// 1. 

    // a - Calcule e mostre o valor de 77F em K, mostrando a unidade no console tambem.

    console.log("Convertendo 77F para K sera:", (77 - 32) * (5/9) + 273.15, "K")

    // b - Calcule e mostre o valor de 80C em F, mostrando a unidade no console tambem

    console.log("Convertendo 80C para F sera:", (80) * (9/5) + 32,"F")

    // c - Calcule e mostre o valor de 30C em F e K
    // d -Altere o ultimo item para que o usuario insira o valor em graus Celsius que ele deseja converter

    const tempCelsius = Number(prompt("Digite um valor em grau celsius:"))

    console.log("Convertendo 30C em F sera:", (tempCelsius) * (9/5) + 32, "F")
    console.log("Convertendo 30C para K", tempCelsius + 273,15, "K")


//2. 
    //a - Calcule e mostre o valor a ser pago por uma resideencia que consuma 280
    //b - Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago nela mesma residencia acima considerando 15% de desconto

     
    const consumoQuilowatt = Number(prompt("Qual o valor consumido de energia em Quilowatt em sua casa?"))
    const entradaDeDesconto = Number(prompt("Qual o valor de desconto?"))
    const valorDeConsumo = consumoQuilowatt * 0.05
    const valorComDesconto = valorDeConsumo - (valorDeConsumo * (entradaDeDesconto / 100))

    console.log(`Sua residencia que consome ${consumoQuilowatt} quilowatt-hora pagara:`, valorComDesconto, "R$")

//3. 

    // a - Escreva um programa que converta 20lb para kg. Imprima a resposta no console da seguinte forma: 
    // 20lb equivalem a X kg (/ 2,205)

    console.log("20lb equivalem a", 20 / 2.205, "Kg")

    // b - escreva um programa que converta 10,5oz para kg
    // 10,5oz equivalem a X kg ( / 35,274)

    console.log("10,5oz equivalem a", 10.5 / 35.274, "Kg")

    // c - Escreva um programa que converta 100mi para m.
    // 100mi equivalem a X m

    console.log("100mi equivalem a", 100 * 1609, "m" )

    // d - Escreva um programa que converta 50ft para m
    // 50ft equivalem a X m

    console.log("50ft equivalem a", 50 / 3.281, "m" )

    // e - escreva um programa que converta 103.56gal para litro.
    // 103.56gal equivalem a X l

    console.log("103.56gal equivalem a", 103.56 * 3.806, "l" )

    // f - escreva um programa que converta 450xic para litro.
    // 450xic equivalem a X l
    // g - modifique o programa para que peça ao usuario o valor da unidade original antes de converter

    const valorXic = Number(prompt("Qual o valor em Xicara a ser convertido para Litros?"))
    const fatorConvercao = 3.52
    
    console.log("450xic equivalem a", valorXic / fatorConvercao, "l")

/*----------------------------FIM----------------------------*/