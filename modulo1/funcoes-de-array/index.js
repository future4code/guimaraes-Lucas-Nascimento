/*Exercicios de interpretação de codigo

1 - 
a)
    Será impresso o mesmo array 3 vezes .

2 - 
a)
    Será impresso um novo array com apenas o nome do array original.

3 -
a) 
    Será impresso os objetos que não tem "Chijo" no elemento apelido.
*/



//Exercicios de escrita de código

//1 - 


const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a) Crie um novo array que contenha apenas o nome dos doguinhos

const nomesDogs = pets.map((nomes, index, array) => {
    return nomes.nome
})
console.log(nomesDogs)

//b) Crie um novo array apenas com os cachorros salsicha

const dogsSalsicha = pets.filter((item, index, array) => {
    return item.raca.toLowerCase() === "salsicha"
})
console.log(dogsSalsicha)

//c) Crie um novo array que possuirá mensagens para enviar para todos
//os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto
//de 10% para tosar o/a [NOME]!"

const clientesPoodles = pets.filter((item, index, array) => {
    return item.raca.toLowerCase() === "poodle"
})
const mensagemClientesPoodle = clientesPoodles.map((item, index, array) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})

console.log(mensagemClientesPoodle)


// 2 -
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a) Crie um novo array que contenha apenas o nome de cada item

const nomeItens = produtos.map((item, index, array) => {
    return item.nome 
})
console.log(nomeItens)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto
//em todos eles

const desconto5porcento = produtos.filter((item, index, array) => {
    item.preco = (item.preco * 0.95).toFixed(2)
    return item.preco
})
console.log(desconto5porcento)

//c)Crie um novo array que contenha apenas os objetos da categoria Bebidas
const itensBebidas = produtos.filter((item, index, array) => {
    return item.categoria.toLowerCase() === "bebidas"
})
console.log(itensBebidas)

//d) Crie um novo array que contenha apenas os objetos cujo nome a palavra "Ypê"
const itemYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})
console.log(itemYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [Nome] por [Preço]".
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const mensagemDeCompra = itemYpe.map((item, index, array) => {
    return `Compre ${item.nome} por ${item.preco}.`
})

console.log(mensagemDeCompra)




