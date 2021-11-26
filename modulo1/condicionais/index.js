/* Exercicios de interpretaçao de condigo */ 

/*
1 - 
    a) O codigo realiza um teste para saber se o numero que o usuario inseriu é par
    b) Numeros pares
    c) Numeros impares

2 - 
    a) Para armazenar obejtos no caso frutas com preços e retornar o nome e fruta escolhidos pelo usuario.
    b) "O preço da fruta maçã é R$2.25."
    c) "P preço da fruta pêra é R$5."

3 - 
    a) Esta armazenando um valor do tipo Number inserido pelo usuario
    b) "Esse número passou no teste" "Essa mensagem é secreta!!!"
        Dara erro de codigo se inserir o valor -10
    c) Sim, se inserido algum valor igual ou menor que 0.
*/


/* Exercicios de escirta de código */

// 1 - 
//a) 

let idade = prompt("Qual a sua idade?")

//b)

let numberIdade = Number(idade)

//c) 

if (idade >= 18) {
    console.log("Você pode dirigir.")
}else{
    console.log("Você não pode dirigir.")
}


//2 - 

let turnoDoDia = prompt("Em qual turno voçê estuda? Digite 'M' p/ Matutino, 'V' p/ Vespertino ou 'N' p/ Noturno.")

if (turnoDoDia === "M") {
    console.log("Bom dia!")
}else if (turnoDoDia === "V") {
    console.log("Boa tarde!")
}else{
    console.log("Boa noite!")
}

//3 - 

let turnoDia = prompt("Em qual turno voçê estuda? Digite 'M' p/ Matutino, 'V' p/ Vespertino ou 'N' p/ Noturno.")

switch (turnoDia) {
    case "M" :
        console.log("Bom dia!")
        break;
    
    case "V" :
        console.log("Boa tarde!")
        break;

    case "N" :
        console.log("Boa noite!")
        break;

    default :
        console.log("Caracter invalido")
        break;
}

//4 - 

const generoDoFilme = prompt("Qual o gênero do filme?")
const precoDoIngresso = Number(prompt("Qual o preço do ingresso?"))

if (generoDoFilme === "fantasia" && precoDoIngresso < 15) {
    console.log("Bom filme!")
  
}else{
    console.log("Escolha outro filme.")
}



