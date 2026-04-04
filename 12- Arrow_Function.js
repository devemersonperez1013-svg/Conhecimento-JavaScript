// ========================================
// ARROW FUNCTIONS
// ========================================

// ========================================
// 1. INTRODUÇÃO DAS ARROW FUNCTIONS
// ========================================

// Arrow Funtion foram apresentadas na versão ES6, são
//  uma forma mais curta de escrever funções em JavaScript.
//  Elas são especialmente úteis para funções anônimas e
//  têm uma sintaxe mais enxuta

// SINTAXE BÁSICA
let somar = (a, b) => a + b;
console.log(somar(2, 3));
// Aqui o somar é uma Arrow que recebe dois números a e b
//  e retorna a soma deles. Vemos aqui que não usamos a
//  palavra function e o retorno implicito

// FUNÇÕES SEM PARÂMETROS
let saudar = () => console.log("Olá mundo!");
saudar();
// Uma função sem parâmetros, ainda que, precisamos dos parênteses

// FUNÇÕES COM CORPO DE BLOCO
let multiplicar = (c, d) => {
  let resultado = c * d;
  return resultado;
};
console.log(multiplicar(2, 4));
// Funções com mais de uma expressão, usamos as chaves e a declaração return

// ========================================
// 2. CARACTERISTICAS IMPORTANTES DAS ARROW FUNCTIONS
// ========================================

// Arrow Functions não são apenas sintaxe mais curta. Elas
//  têm caracteristicas únicas que as diferenciam das funções tradicionais

// this NAS ARROW FUNCTION
function Pessoa() {
  this.idade = 0;
  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa(); // Isso inclementa a idade a cada segundo
// Em Arrow Functions, this é léxico, refere-se ao contexto no
//  qual a função foi criada, ao contrário das funções tradicionais

// NÃO PODEM SER CONSTRUTORES
// Arrow Function não podem ser usadas como funções construtoras.
//  Tentar fazer isso resultará em erro
let Pessoa = () => {};
let p = new Pessoa(); // TypeError: Pessoa is not a constructor

// ========================================
// 3. USOS PRÁTICOS DAS ARROW FUNCTIONS
// ========================================

// As arrow functions são especialmente úteis em callbacks e funções
//  que exigem contexto léxico de this

// EM MÉTODO DE ARRAY
let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map((numeros) => numeros * 2);
console.log(dobrados);
// Arrow Functions são ótimas para operações, como .map(), .filter(), .reduce().

// CALLBACKS
setTimeout(() => console.log("Olá depois de 1 segundo"), 1000);
// Aqui usamos uma Arrow Function como callback para setTimeout

// ========================================
// EXERCICIOS
// ========================================

// 1. Crie Arrow Functions para as operações básicas de matemática:
//  soma, subtração, multiplicação, e divisão.
//  Cada função deve aceitar dois parâmetros e retorna o resultados da operação
let soma = (n1, n2) => {
  let total = n1 + n2;
  return total;
};
let subtracao = (n1, n2) => {
  let total = n1 - n2;
  return total;
};
let multiplicacao = (n1, n2) => {
  let total = n1 * n2;
  return total;
};
let divisao = (n1, n2) => {
  let total = n1 / n2;
  return total;
};

console.log(multiplicacao(10, 5));

// 2. Escreve um Arrow Function que recebe um nome como
//  parâmetro e retorna uma saudação personalizada
let apresentacao = (nome) => console.log(`Oi, meu nome é ${nome}`);
apresentacao("Marcos");

// 3. Use uma Arrow Function dentro de um setInterval para criar um contador
//  que imprime um número a cada segundo.
// function contaSeg() {
//     this.contador = 0

//     const intervalo = setInterval(() => {
//         this.contador++
//         console.log(`Passou ${this.contador} segundos`)

//         if (this.contador >= 10) {
//             clearInterval(intervalo)
//             console.log("Contador desligado!")
//         }
//     }, 1000)
// }
// contaSeg()

class ContaSeg {
  constructor() {
    this.contador = 0;

    // Arrow Function dentro do setInterval
    const intervalo = setInterval(() => {
      this.contador++;
      console.log(`Passou ${this.contador} segundos`);

      if (this.contador >= 10) {
        clearInterval(intervalo);
        console.log("Contador desligado!");
      }
    }, 1000);
  }
}
new ContaSeg();
// 4. Dado um Array de números, use uma Arrow Function com o
//  método filter para criar um novo array, apenas com numeros pares
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let apenasPares = numbers.filter((numbers) => numbers % 2 === 0);
console.log(`Os pares são: ${apenasPares}`);

// 5. Crie uma Arrow Function que converte a temperatura de Celsius para Fahrenheit
let paraFahrenheit = (celsius) => {
  let resultado = celsius * 1.8 + 32;
  return resultado;
};
console.log(paraFahrenheit(30));

// 6. Implemente uma Arrow Function que recebe uma array de strings e retorna
//  um novo array com os itens ordenados alfabeticamente
let letras = ["a", "d", "c", "e", "b", "f", "g"];

let ordemAlfabetico = (array) => array.sort((a, b) => a.localeCompare(b));

console.log(ordemAlfabetico(letras));
