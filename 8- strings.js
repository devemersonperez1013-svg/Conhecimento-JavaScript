// =========================
// INTRODUÇÃO STRINGS
// =========================
/**
 * Uma string é uma sequênciade caracteres usada para representar texto.
 * Em Javascriopt, você cria strings usando aspas simples ', aspas duplas ",
 * ou crases `, para templates strings.
 */

let saudacao = "Olá, Mundo!";
let nome = "João";
let mensagem = `Bem-vindo ${nome}`;

console.log(saudacao);
console.log(nome);
console.log(mensagem);
/**
 * Explicação:
 * 1. let saudacao = "Olá, mundo!"; : Declara uma string usando aspas duplas.
 * 2. let nome = 'João'; : Declara uma string usando aspas simples
 * 3. let mensagem = `Bem-vindo, ${nome}`: Declara uma template string usando
 * crases e interpolação da variável ${}.
 */

// =========================
// 1. MÉTODOS COMUNS DE STRINGS
// =========================
// JS fornece vários métodos para manipular strings. Aqui vai os mais comuns:
/**
 * lenght: Retorna o comprimento da string.
 * toUpperCase(): Converte a string para maiúsculas.
 * toLowerCase(): Converte a string para minúsculas.
 * indexOf(): Retorna o indice da primeira ocorrência de uma valor especificado.
 * slice(): Extrai uma parte da string e retorna a parte extraída.
 * replace(): Substitui um valor específicado po outro valor em uma string.
 * split(): Divide a string em um array de substrings.
 */
let texto = "JavaScript é incrível!";

console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.indexOf("incrível"));
console.log(texto.slice(0, 10));
console.log(texto.replace("incrível", "fantástico"));
console.log(texto.split(" "));
/**
 * Explicação:
 * texto.length : Retorna o comprimento da string.
 * texto.toUpperCase() : Converte a string para maiúsculas.
 * texto.toLowerCase() : Converte a string para minúsculas.
 * texto.indexOf("incrível"): Retorna o índice da primeira ocorrência da palavra "incrível".
 * texto.slice(0, 10) : Extrai os primeiros 10 caracteres da string.
 * texto.replace("incrível", "fantástico") : Substitui "incrível" por "fantástico" na string.
 * texto.split(" ") : Divide a string em um array de substrings, usando o espaço como delimitador
 */

// =========================
// 2. CONCATENANDO STRINGS
// =========================
// Podemos juntar as strings usando o operador +, ou templates strings.
let saudacao1 = "Olá";
let nome1 = "Emerson";
let mensagem1 = saudacao1 + ", " + nome1 + "!";

console.log(mensagem1);

// Usando template strings
let mensagemTemplate = `${saudacao1}, ${nome1}!`;
console.log(mensagemTemplate);
/**
 * Explicação:
 * let mensagem = saudacao1 + ", " + nome1 + "!": Concatena as strings saudacao , ", " ,
 * nome e "!" .
 * let mensagemTemplate = `${saudacao1}, ${nome1}!`: Usa template strings para criar a mensagem.
 */

// ==================================
// 3. ESCAPANDO CARACTERES
// ==================================
// Para incluir aspas dentro de uma string, você pode usar o caractere de escape "\"
let frase = 'Ele disse: "JavaScript é bom demais"';
console.log(frase);

// ==================================
// 4. COMPARANDO STRINGS
// ==================================
// Você pode comparar strings usando os operados de comparação ==, ===, != e !==.
let a = "JavaScript";
let b = "JavaScript";
let c = "javascript";

console.log(a == b);
console.log(a === b);
console.log(a == c);
console.log(a === c);
/**
 * Explicação:
 * a == b: Verifica se "a" e "b" têm o mesmo valor."
 * a === b: Verifica se "a" e "b" têm o mesmo valor e tipo."
 * a == b: Verifica se "a" e "c" têm o mesmo valor (diferença entre maiúscula e minúscula)."
 * a == b: Verifica se "a" e "c" têm o mesmo valor e tipo (diferença entre maiúscula e minúscula)."
 */

//
// ==================================
// 5. EXERCICIOS
// ==================================

// 1. Declare uma string que contenha uma mensagem de boas-vindas personalizada,
// Use metodos de strings para modificar e exibir a mensagem no console
let Nome = "Emerson";
const boasVindas = `Seja bem-vindo ${Nome}`;
console.log(boasVindas);

// 2. Declare uma string que represente uma frase e use o metodo split
// para dividi-la em palavras. Exiba o array de palavras no console.
const elogio = "JavaScript eh bom demais";
console.log(elogio.split(" "));

// 3. Crie uma string que contenha uma citação famosa e use o método replace
//  para substituir uma palavra por outra. Exiba a citação modificada no console
const citacao = "Tinha que ser o Chaves mesmo";
console.log(citacao.replace("Chaves", "Kiko"));

// 4. Declare strings que representem nomes de pessoas e use operadores de
//  comparação para verificar se os nomes são iguais. Exiba o resultado no console.
const pessoa1 = "Paulo";
const pessoa2 = "Maria";
const pessoa3 = "Paulo";
console.log(pessoa1 == pessoa3);

// 5. Crie uma string que contenha um parágrafo de texto e use o método
//  slice para extrair uma frase expecífica. Exiba a frase extraída no console.
const texto1 = "Tá na hora do pau"
console.log(texto1.slice(0, 10)) 

// ==================================
// 6. ENSINAMENTO BONÛS
// ==================================

// 1. indexOf é útil para verificar se algo existe, exemplo:
let exemplo1 = "JavaScript é incrível!";

console.log(texto.indexOf("incrível"))  // 13 (encontrou!)
console.log(texto.indexOf("Python"))    // -1 (não encontrou!)

// Outra melhor forma:
if (exemplo.includes("Java")) {
    console.log("Contém 'Java'!")
}

// 2. slice() com índices negativos:
let exemplo2 = "JavaScript"
console.log(texto.slice(-6))        // "Script" (ultimos 6 caracteres)
console.log(texto.slice(-6, -1))    // "Scrip" (do -6 até -1)
// índices negativos contam do final para o inicio, o que é útil!

// 3. replace() só substitui a PRIMEIRA ocorrência
let exemplo3 = "gato gato gato"
console.log(exemplo3.replace("gato", "cachorro"))   // Só substitui a primeira palavra
console.log(exemplo3.replaceAll("gato", "cachorro"))   // Substitui todos

// 4. split(), importante e muito poderoso:
let linguagens = "JavaScript,Python,Ruby"
console.log(linguagens.split(","))      // Divide por vírgula
console.log("Oi".split(""))             // Divide caracteres individualmente
console.log(linguagens.split(",", 2))   // Limita quantas divisões

// 5. Demais métodos que se usa muito!
let exemplo4 = "  JavaScript  ";

// trim() - Remove espaços das pontas:
console.log(texto.trim())  // "JavaScript"

// startsWith() e endsWith():
console.log(texto.trim().startsWith("Java"))  // true
console.log(texto.trim().endsWith("Script"))  // true

// includes() - Verifica se contém:
console.log(texto.includes("Script"))  // true

// repeat() - Repete a string:
console.log("Ha".repeat(3))  // "HaHaHa"

// charAt() - Pega caractere na posição:
console.log("JavaScript"[0])        // "J" (jeito moderno)
console.log("JavaScript".charAt(0)) // "J" (jeito tradicional)

// padStart() e padEnd() - Adiciona caracteres:
console.log("5".padStart(3, "0"))  // "005"
console.log("5".padEnd(3, "0"))    // "500"

// 6. Templates Literals - Recursos avançados:
let poema = `Primeira Linha
Segunda Linha
Terceira linha`

// Chama funções:
function dobro(n) { return n * 2 }
console.log(`O dobro de 5 é ${dobro(5)}`)

// Expressões complexas:
let idade = 22
console.log(`Você é ${idade >= 18 ? 'maior' : 'menor'} de idade`)