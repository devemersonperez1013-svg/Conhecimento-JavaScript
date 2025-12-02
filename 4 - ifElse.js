// If e Else são estruturas de controle que com elas, podemos executar diferentes blocos de código com base em condições variadas, tornando nosso código mais inteligente e adaptável
// Estrutura de código
// Sintaxe:
if (condition) {
  // Bloco de código se a condição for verdadeira
} else {
  // Bloco de código se a condição for falsa
}

// Exemplo:
let idade = 10;
if (idade >= 20) {
  console.log("Usuário é maior de idade. Pois tem " + idade + " anos");
} else {
  console.log("Usuário é menor de idade. Porque tem " + idade + " anos");
}
// Com a variável idade, verificamos se o usuário é maior de idade imprimimos uma frase em cada responda correspondende

// Encadeamento com Else If
// De vez enquanto, precisamos checar várias condições. Exemplo de else if:
let hora = 15;
if (hora < 12) {
  console.log("Bom dia!");
} else if (hora < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
/* Aqui declaramos uma variável chamada hora, e com base no valor 
dela, imprimimos uma frase no console */

// Estrutura Switch Case
/* switch é utilizado quando você tem vários condições para 
verificar. Funciona assim, ele escolhe um caminho baseado no valor 
de uma variável */
// Exemplo:
switch (expressão) {
  case valor1:
    // Bloco de código
    break;
  case valor2:
    // Bloco de código
    break;
  default:
    // Bloco de código
    break;
}
// Exemplo na prática:
let corFavorita = "azul";
switch (corFavorita) {
  case "vermelho":
    console.log("Você gosta de vermelho");
    break;
  case "azul":
    console.log("Você gosta de azul");
    break;
  case "verde":
    console.log("Você gosta de verde");
    break;
  default:
    console.log("Cor não identificada");
}
// Podemos fazer várias comparações com a variável "corFavorita" para assim printar uma mensagem
// O default é executado quando nenhum dos 'cases' acerta
// Sem os breaks, pode dar uns bugs no código

// Operadores de Comparação
// Alguns são:
// == (igual)
// === (estritamente igual - valor e tipo)
// != (diferente de)
// !== (estritamente diferente de)
// > (maior que)
// < (menor que)
// >= (maior ou igual)
// <= (menor ou igual)
// Exemplo:

let x = "10";
console.log(x == 10); // true (compara apenas o valor)
console.log(x === 10); // false (compara valor e tipo)

// Operadores lõgicos
// Isso combina com multiplas condicões:
/* 
&& (E/And) -> Todas condições devem ser verdadeiras
|| (Ou/Or) -> Pelo menos uma condiçãp deve ser verdadeira
! (Não/Not) -> Inverte o valor booleano
*/

let Idade = 17;
let temCarteira = true; // Valor booleano
if (Idade >= 18 && temCarteira) {
  console.log("Ta liberado!");
}
if (Idade < 18 || !temCarteira) {
  console.log("Não pode dirigir!");
}

// Valores Truthty e Falsy
// Valores considerados true:
// - Strings: "Ola", "o", "false", " ",
// - Numericos: 1, -1, 3.14, Infinity, -Infinity
// - Arrays: [], {} -> tanto uma lista como objeto vazios são considerados true
// Valores considerados false:
// - false, 0, "", null, underfined, NaN
let nome = ""; // Valor falsy
if (nome) {
  console.log("Nome existe");
} else {
  console.log("Nome vazio");
}

// Operador Ternário
// Forma mais comum de fazer if/else:
let numero = 15;
let mensagem = numero >= 18 ? "Maior numero" : "Menor numero";
console.log(mensagem);
// Equivalente a:
/* 
if (numero >= 18){
    mensagem = "Maior numero"
} else {
    mensagem = "Menor numero"
} 
*/

// ++++++++ Exercicios ++++++++++
/* 
1. Classisficação por idade: O programa classifica pessoa entre criança (13 anos), 
adolescente (13 - 17 anos), adulto (18 - 64 anos) e idoso (> 65 anos), use if/else/else if
*/
let idadePessoa = 30;

if (idadePessoa <= 13) {
  console.log("Você é criança!");
} else if (idadePessoa >= 13 && idadePessoa <= 17) {
  console.log("Você é adolescente!");
} else if (idadePessoa >= 18 && idadePessoa <= 64) {
  console.log("Você é adulto!");
} else {
  console.log("Você é idoso");
}

/*
2. Cria um jogo simples de advinhação, onde o usuário tenta acertar o numero entre 1 a 5.
Use switch para verificar a escolha e imprimir se acertou ou não 
*/
let advinhaNumero = 4; //escolhemos o numero 4

switch (advinhaNumero) {
  case 1:
    console.log("Não é esse numero, tente novamente");
    break;
  case 2:
    console.log("Não é esse numero, tente novamente");
    break;
  case 3:
    console.log("Não é esse numero, tente novamente");
    break;
  case 4:
    // Número escolhido como certo
    console.log("Você acertou, parabéns!");
    break;
  case 5:
    console.log("Não é esse numero, tente novamente");
    break;
  default:
    console.log("Erro! Escolhe o número válido entre 1 a 5");
    break;
}

/* 
3. Desenvolva um programa que, dada a nota do aluno, classifica a nota como 'Reprovado' (menos de 6),
'Recuperação' (entre 6 - 7), ou 'Aprovado' (> de 7). Use switch
*/
let notaAluno = 3;

switch (true) {
  case notaAluno < 6:
    console.log("Reprovado!")
    break;
  case notaAluno >= 6 && notaAluno <= 7:
    console.log("Recuperação!")
    break;
  case notaAluno > 7:
    console.log("Aprovado!")
    break;
  default:
    console.log("Erro, tente novamente...")
    break;
}
