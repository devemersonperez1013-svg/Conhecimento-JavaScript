// Bloco de codigo de repetição sob determinadas condições
// O que é Loops?
/* Loops é um bloco de código com uma condição especifica é atendida.
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

// ----Exercicio-----
// 1. Crie um loop que vá de 0 a 10
for (let i = 0; i < 11; i++) {
    console.log(i)   
}

// 2. Crie um loop for que imprima somente numeros impares de 0 a 20
for (let i = 0; i < 21; i++) {
    if (i % 2 === 1) {
        console.log(i)
    }   
}

// 3. Crie um loop while que imprima numeros de 0 a 10
let num = 0
while (num < 11) {
    console.log(num); num++
}

// 4. Crie loop for que imprima numeros de 0 a 100, mas que interrompa a execução quando chegar ao número 50
for (let i = 0; i < 101; i++) {
    if (i === 51) {
        break
    }
    console.log(i)
}

// 5. Crie um loop for que imprima numeros de 0 a 20, mas que pule a impressao do numero 13
for (let i = 0; i < 21; i++) {
    if (i === 13) {
        continue
    }
    console.log(i)
}

// 6. Crie um array de nomes e use um loop for...of para imprimir cada nome do array
let names = ["Ana", "Paulo", "Marcos"]
for (let name of names) {
    console.log(name)
}

// Com forEach. Recomendado ->
names.forEach(name => console.log(name))