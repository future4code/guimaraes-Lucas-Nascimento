/*  Exercicios de interpretação 

1 - 
    a. undefined
    b. null
    c. 11
    d. 3
    e. array(11)
    f. 9

2 - Entrada - "Subi num õnibus em Marrocos"
    Retorno - "SUBI NUM ÔNIBUS EM MIRRECOS"
*/

/* Exercicios de escrita de codigo */ 

// 1 - Faça um programa que pergunte ao usuário seu nome e seu e-ma0il.
//     Em seguida, Imprima no console a seguinte mensagem:
//     O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nomeUsuario = prompt("Qual seu nome?")
const emailUsuario = prompt("Qual seu email?")

console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}!` )



/* 2 - Faça um programa que contenha um array com 5 das suas comidas preferidas, 
armazenado em uma variável. Em seguida, siga os passos:
a) Imprima no console o array completo

b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
seguida por cada uma das comidas, **uma embaixo da outra**.

c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
 Troque a segunda comida da sua lista pela inserida pelo usuário.
 Imprima no consolea nova lista */


const comidasFavoritas = ["Bolo de Cenoura", " Strogonoff", " Escondidinho de frango", " MilkShake de Chocomenta", " Bolacha de nata"]

console.log(comidasFavoritas)

console.log("Essas são minhas comidas favoritas:", comidasFavoritas )

let comidaUsuario = prompt("Qual sua comida preferida?")
comidasFavoritas.splice (1, 1, comidaUsuario)
console.log(comidasFavoritas)

// 3 - 

let listaDeTarefas = []
listaDeTarefas[0] = prompt("Qual a primeira tarefa:")
listaDeTarefas[1] = prompt("Qual a segunda tarefa:")
listaDeTarefas[2] = prompt("Qual a terceira tarefa:")

console.log(listaDeTarefas)

let indiceTarefas = Number(prompt("Quais tarefas você ja realizou hoje? Insira o numero 0, 1 ou 2"))

listaDeTarefas.splice(indiceTarefas, 1)
console.log(listaDeTarefas)

/* --------------------- Desafio ----------------------*/


// 1 - Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase,
//  ignorando os espaços


// 2 - 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`,
// faça um programa que acha o índice da palavra Abacaxi e
//  imprime tanto o índice quanto o tamanho do array


const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const abacaxi = frutas[2]

console.log(abacaxi, frutas.length)


