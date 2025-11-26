// Bloco de c'odigo de repetição sob determinadas condições
// O que é Loops?
/* Lopps é um bloco de código com uma condição especifica é atendida.
No JavaScript, temos vários desse tipo com usos especificos */
// Por que usamos Loops?
/* Usamos para tarefas repetitivas sem escrever o mesmo código várias vezes.
São fundamentais para operações como, percorrer arrays, dados, ou até mesmo em lógicas de jogos. */

// Tipos de Loops
// For: Esse tipo é para saber quantas vezes quer rodar algo. Conforme o exemplo de baixo
for (let i = 0; i < 10; i++) {
    console.log(i)
}
/* O "i" começa com o 0, e o loop continua até que o "i" for menor que 10. cada iteração "i" é incrementado em 1 */ 
// OBS: iterar significa repetir um tal processo. É um ciclo de repetição

// Loop while: 
/* Se usa em momentos que você está naquele "vou ver o que acontece". 
Mas cuidado ao usar, se esquecer um comando, pode "explodir o pc" de tanto código que vai gerar */ 
// let i = 0
while (i < 10) {
    console.log(i); i++
}

// Loop do... while
/* Parecido com o while, mas a diferença é que ele executada pelo menos uma vez, mas
mesmo que a condição seja falsa */ 
let i = 0
do {
    console.log(i); i++;
} while (i < 10);

// Loop for...of:
/* Isso aqui é usado quando você tem um array ou algo iterável e quer passar por cada elemento dele */ 
let nomes = ["Ana", "Bia", "Carlos"]
for (let nome of nomes) {
    console.log(nome) // Mostra cada nome
}
// Loop for...in:
/* Esse loop é usado para percorrer objetos, no console, as propriedades da chave declarada é nome, idade, e cidade
pessoa é o objeto que vai ser percorrido que, entre colchetes, está o valor da chave */ 
let pessoa = {nome:"João", idade: 25, cidade: "São Paulo"}
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave])
}

// Controle de Loops
/* break: Usado para sair de um loop antes que atinja sua condição de parada natural 
continue: Pula a iteração atual e continua com a próxima*/ 
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break // Sai do loop quando i é 5
    }
    if (i % 2 === 0) {
        continue // Pula os números pares
    }

    console.log(i)
}

// +++++ Metodos modernos de array, usando loops
// Loop forEach
/* Esse percorrer os arrays, mais usado especificamente */
let numeros = [1, 2, 3, 4, 5]
// Em vez de for...of
numeros.forEach(num=> console.log(num))
// Filtrar pares
let pares = numeros.filter(num=> num % 2 === 0)
console.log(pares)