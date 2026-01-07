// Arrays é como um armario de gavetas, em cada espaço, guarda-se um tipo de coisa
// Na programação, é onde você armazena e organiza dados
// Exemplo de arrays:
// 1. Mais comum
let series = ["Breaking Bad", "Stranger Things", "Black Mirror"]
// 2. Menos comum, mas funciona
let filmes = new Array("Pulp Fiction", "Clube da Luta", "Matrix")

// Explicando melhor, o primeiro arrays guarda (armazena) três do tipo string, 
// cada filme é um item em uma gaveta, com seu proprio número (indice)
// O arrays pode ser declarado de duas formas: com colchetes [], ou com new Array(...)

// Como acessa-los? fazemos a seguinte maneira
let primeiroSerie = series[0]
// Breaking Bad
let filmeInexistente = filmes[-1]
// undefined, porque não retorna nada na array

// O numero 0 representa a primeira gaveta, onde está armazenado o Breaking Bad
// Os arrays sempre começam no indice 0, ou seja, o primeiro da lista será o item 0!

// Métodos de Arrays:
// Push: Para colocar algo na lista, use push
series.push("Game of Thrones")

// Pop: Para mandar o ultimo da lista sair, use pop
series.pop()

// Shift: Caso queira tirar o primeiro da lista, use shift
series.shift()

// Unshift: Caso queira add algum item no primeiro da lista, use unshift
series.unshift("The Witcher")

// Aletrando Elementos arrays: Se quer modificar algum item da lista, é so declarar o indice e trocar
let games = ["FIFA", "Call of Duty", "Minecraft"]
games[0] = "FIFA 24"
// Agora a "FIFA" virou "FIFA 24"

// Length: Para saber quantos elementos existem na lista, usa length
let totalSeries = series.length

// Para saber o ultimo número sem o uso do for, apenas usando length, faz isso:
let frutasDoces = ["Maçã", "Banana", "Manga"]
// let ultimaFruta = frutasDoces[frutasDoces.length - 1]
let ultimaFruta = frutasDoces.at(-1)
console.log(ultimaFruta)

// 1. Percorrendo um arrays com Loop através do índice:
for (let i = 0; i < games.length; i++) {
    console.log(games[i])
}

// 1. For... of tem o valor direto
for (const game of games) {
    console.log(game)
}


// Exercicios
// 1. Adicione elementos arrays
let animais = []
animais.push("Leão", "Macaco", "Elefante")
// console.log(animais)

// 2. Removendo o Primeiro Elemento do Array:
animais.shift()
// console.log(animais)

// 3. Insirindo Elementos no inicio do Array
animais.unshift("Girafa", "Tigre")
// console.log(animais)

// 4. Alterando Elementos Especificos do Array
animais[2] = "Pantera"
// console.log(animais)

// 5. Usando Length para Contar Elementos
let frutas = ["Morango", "Uva", "Laranja", "Banana"]
// let quantidadeFrutas = frutas.length
// console.log(frutas)

// 6. Percorrendo um Array com o Loop For
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}
// ---//---

// Exercicio 7
// Crie uma array contenha numeros, e soma entre eles
const numeros = [2, 5, 8, 3]
let soma = 0

/*let somaNumeros = numeros[0] + numeros[1] + numeros[2] + numeros[3] 
console.log(somaNumeros)*/
for (let n of numeros) {
    soma += n
}
console.log(soma)

// Exercicio 8
// Crie um array que contenha numeros, e faça uma filtração de quais dele é maior que 17
let valores = [4, 11, 32, 9, 15] // Exemplo
const resultado = valores.filter(valores => valores > 17) // Arrow Function
console.log(resultado)
// Explicando: O "filter" testa cada número
// Se for "true", ele inclui no novo array
// Vejamos:
// 4>17 == false
// 11>17 == false
// 32>17 == true
// 9>17 == false
// 15>17 == false