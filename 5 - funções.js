// Funções:
/*
O que são funções? 
 Funções tem sua tarefas especificas. Na programação, 
 elas ajudam a evitar repetições de código e tornam as linhas de forma 
 organizada e fácil de gerenciar
*/ 

/* 
Por que usa-los?
 Com as funções, não tem a necessidade de escrever a mesma código a cada linha, 
 com as funções, fica mais fácil e você chama ele em casos especificos
*/

/* 
Defindo funções:
 Vamos criar uma função chamado somar que pega dois números (num1 e num2) e
 retorna a soma deles, usamos o return para o resultado saia
*/
function somar(num1, num2) {
    return num1 + num2
}
// Agora, vamos chamar a função da seguinte maneira:
let resultado = somar(5, 3) // Aqui criamos uma variavel e chamamos atraves dela a função
console.log(resultado)

// Parâmetros e Argumentos
/* Os parâmetros são como placeholders do css, que definem que tipo de valores a função
espera receber. Já os argumentos, são valores reais passados para a função */
// Exemplo rápido
function saudar(nome) {
    console.log("Olá " + nome)
}
saudar("Cauê")
/* O nome é um parâmetro, e Cauê é um argumento. A função saudar pega esse argumento e 
usa no lugar do parâmetro */ 

// Arrow Functions
/* Os Arrow functions, são um jeito mais novo e mais elegante de escrever funções.
São especialmente úteis para funções anônimas e curtas. */
// Exemplo Arrow Simples:
let soma = (a, b) => a + b
let resultadoA = soma(5, 3)
console.log(resultadoA)
// Nesse novo tipo de função, não é necessario usar o return!

// ++++++ Exercicio ++++++
// 1. Crie uma função que calcula a área de um retangulo dado largura e altura
function areaRetangulo(largura, altura) {
    return largura * altura
}
let resultadoRetangulo = areaRetangulo(5, 3)
// console.log("A área do retângulo é " + resultadoRetangulo + " metros quadrados")
console.log(`A área do retângulo é ${resultadoRetangulo} metros quadrados`) // muito melhor do que +


// 2. Crie uma função que receba um número e retorna true se for par, e false se for impar.
function parImpar(num) {
    return num % 2 === 0 // Retorna o resultado em booleano
    
    // if (num % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // }
}

console.log(parImpar(7))

// 3. Escreva uma função que converte polegadas em centimetros
function polegadasCm(polegada) {
    return polegada * 2.54
}

let resultadoEmCM = polegadasCm(127)
console.log("O resultado é " + resultadoEmCM + " centímetros")

// 4. Escreva um código que calcula o Índice de Massa Corporal (IMC)
function IMC(peso, altura) {
    return peso / (altura * altura)
}

let resultadoIMC = IMC(72, 1.7)
console.log("O resultado do IMC é " + resultadoIMC)

// 5. Crie uma função que recebe uma string e retorna a mesma string em letras minúsculas
function maiuscMinusc(string) {
    return string.toLowerCase()
}

console.log(maiuscMinusc("SINUCA"))

/* 
6. Crie Arrow Function chamado "multiplicaPorDez" que recebe um número
 como parâmetro e retorna o valor multiplicado por 10
*/ 

let multiplicaPorDez = num1 => num1 * 10
console.log(multiplicaPorDez(5))
// OBS: A colocação dos parênteses so pode por quando há mais de um parâmetro!
// - Exenplo: let multiplicadoPorDez = (num1, num2, num3, num...)