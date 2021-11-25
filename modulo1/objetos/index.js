/* Exercicios de interpretação de código */

//1 - 
// a) Matheus Nachtergaele / Matheus Nachtergaele / canal: "Globo", horario: "14h"

// 2 - 
//  a)  nome: "Juca",      
//	    idade: 3, 
//  	raca: "SRD"
//
//      nome: "Juba", 
//  	idade: 3, 
//  	raca: "SRD"

//      nome: "Jubo", 
//  	idade: 3, 
//  	raca: "SRD"

// b) A sintaxe de tres pontos conseguimos realizar uma cópia de um objeto (ou array) inteiro.
    

// 3 - a)  Sera no console um valor booleano, "false" 
//     b)  Primeiramente explicando o valor true impresso no console, foi realizada uma consulta dentro do objeto, se a pessoa era ou não backender
//         O motivo de retornar o valor undefined, é por causa que a consulta dentro do objeto não encontrou o elemento "altura"


/*--------------------------- Exercicio de escrita de codigo ---------------------------*/


//1 - 
//A)

const pessoa = {
    nome: "Amanda",
    apelidos: ["Amandinha", "Mandinha", "Mandi"]
}



function imprimirApelidos(pessoa) {
    
    let imprimir = console.log(
        `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]} `
    )

    return imprimir
}

imprimirApelidos(pessoa)

//B) 

const novoApelidos = {
    ...pessoa,
    apelidos: ["apelido1", "apelido2", "apelido3"]
}

imprimirApelidos(novoApelidos)

//2- 
//A)

const usuario = {
    nome: "Lucas" ,
    idade: 24 ,
    profissao: "autonomo"
}

const usuario1 = {
    nome: "Carlos" ,
    idade: 42 ,
    profissao: "mecanico"
}
//B)

function informacoes(usuario, usuario1) {
 let arrays = []

    arrays[0] = usuario.nome + "," + usuario1.nome
    arrays[1] = usuario.nome.length + "," + usuario1.nome.length
    arrays[2] = usuario.idade + "," +  usuario1.idade
    arrays[3] = usuario.profissao + "," + usuario1.profissao
    arrays[4] = usuario.profissao.length + "," + usuario1.profissao.length

    return console.log(arrays)

}

informacoes(usuario, usuario1)

//3 - a)

let carrinho = []

//b) 

let sacolao = [
    {fruta: 'banana', disponibilidade: true},
    {fruta: 'melao', disponibilidade: true},
    {fruta: 'laranja', disponibilidade: true}
]

//c)

function addCarrinho(sacolao) {
    carrinho.push(sacolao)
}
//d)

console.log(addCarrinho(sacolao[0]))
console.log(addCarrinho(sacolao[1]))
console.log(addCarrinho(sacolao[2]))
console.log(carrinho)