/* Exercicios de interpretação 

1 - a) 10
       50
    b) não apareceria nada

2 - a)  A função verifica se a palavra cenoura foi escrita pelo usuario

    b) I - true
       II - true
       III - true

*/

/* ================-Exercicios de escrita-==================*/



// 1 - 
//a)

function imprimirMensagem() {
    console.log("Eu sou Lucas, tenho 24 anos, moro em Uberlândia e sou estudante")
}   
imprimirMensagem()

//b)

function infoEstudante(nome, idade, endereco, profissao) {
  console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)

}
infoEstudante("Laís", 23, "São Paulo", "instrutora")

//2 - 
//a)
function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(5, 5)) //10

//b)
function maiorOuIgual(n1, n2) {
    return n1 >= n2
}
console.log(maiorOuIgual(5, 10)) // false

//c)
function numeroPar(n1) {
    return n1 % 2 === 0
}
console.log(numeroPar(10)) //true

//d)


  

//3 - 
function soma (n1, n2) {
return n1 + n2
}

function subtrair (n1, n2) {
return n1 - n2
}

function multiplicar (n1, n2) {
return n1 * n2   
}

function dividir (n1, n2) {
return n1 / n2  
}

let n1 = Number(prompt("Qual o primeiro numero?"))
let n2 = Number(prompt("Qual o segundo numero?"))

console.log(soma(n1, n2), subtrair(n1, n2), multiplicar(n1, n2), dividir(n1, n2))


/*--------------------------DESAFIO-------------------------*/

//1 - a)

const imprimir = (valor) => {
console.log(valor)
}

let somar = (n1, n2) => {
      return n1 + n2  
} 

imprimir(somar(2, 5))

// 2 -