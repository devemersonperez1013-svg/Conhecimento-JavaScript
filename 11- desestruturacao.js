// ========================================
// DESESTRUTURAÇÃO
// ========================================

// ========================================
// 1. O QUE É DESESTRUTURAÇÃO?
// ========================================

// Desestruturação é um recurso do ES6 que permite extrair
//  dados de arrays ou propriedades de objetos em variaveis
//  distintas de forma prática e direta. É como desempacotar
//  um caixa e colocar cada item em seu próprio lugar

// DESESTRUTURAÇÃO DE ARRAYS
let numeros = [1, 2, 3];
let [primeiro, segundo, terceiro] = numeros;
console.log(primeiro, segundo, terceiro);
// Criamos um array numeros e em seguida, usamos
//  a desestruturação para criar três novas
//  variaveis, cada uma recebendo um elemento do array.
//  É uma maneira rápida de acessar itens individuiais de um array

// DESESTRUTURAÇÃO DE OBJETOS
let pessoa = { nome: "João", idade: 25 };
let { nome, idade } = pessoa;
console.log(nome, idade);
// Nesse exemplo, extraímos as propriedades nome e idade
//  do objeto pessoa para duas novas variáveis.
//  Isso simplifica muito o acesso a propriedade especificas de um objeto

// ========================================
// 2. USOS PRÁTICOS DA DESESTRUTURAÇÃO
// ========================================

// A desestruturação é muito útil em várias situações,
//  como ao trabalhar com funções, arrays, ou quando lidamos
//  com dados mais complexos

// EM FUNÇÕES
function exibirInfo({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}
exibirInfo(pessoa);
// Ao usar a desestruturação em parâmetros de funçào,
//  tornamos o código mais limpo e direto, evitando
//  a necessidade de acessar as propriedades do objeto dentro da função

// COM ARRAYS ANINHADOS
let cores = [
  ["vermelho", "azul"],
  ["verde", "amarelo"],
];
let [primarias, secundarias] = cores;
console.log(primarias, secundarias);
// Desestruturamos um array de arrays. Isso mostra
//  como a desestruturação pode ser adaptada para
//  estruturas de dados mais complexos

// VALORES PADRÃO
let [a = 1, b = 2] = [3];
console.log(a, b);
// Valores padrão na desestruturação:
// O valor padrão só é usado quando a posição do array estiver vazia (ou undefined).
// Se o array tiver um valor naquela posição, o padrão é ignorado.

// let [a = 1, b = 2] = [3];
// a = 3 → posição 0 tem o valor 3, então o padrão 1 é ignorado
// b = 2 → posição 1 está vazia, então o padrão 2 é usado

// Outros exemplos para fixar:
// let [x = 1] = [];          // x = 1  → array vazio, usa o padrão
// let [y = 1] = [undefined]; // y = 1  → undefined conta como vazio, usa o padrão
// let [z = 1] = [9];         // z = 9  → posição 0 tem valor, padrão ignorado

// TROCANDO VALORES DE VARIÁVEIS
let x = 1,
  y = 2;
[x, y] = [y, x];
console.log(x, y);
// A desestruturacão também pode ser usada para trocar
//  valores entre variáveis de forma eficiente, sem
//  a necessidade de uma variável temporária.

// ========================================
// EXERCICIOS
// ========================================

// 1. Crie um array com 3 elementos e utilize a desestruturação
//  para criar 3 variaveis, cada uma recebendo um elemento do array
let refris = ["Coca-cola", "Guaraná", "it"];
let [bom, medio, regular] = refris;
console.log(bom, medio, regular);

// 2. Crie um objeto com propriedade como nome e idade. Use a
//  desestruturação para criar variaveis a partir dessas propriedades
let sujeito = { name: "Marcos", age: 30 };
let { name, age } = sujeito;
console.log(name, age);

// 3. Escreva uma função que recebe um objeto como parâmetro e use
//  a desestruturação para trabalhar com as propriedades do objeto dentro da função
function dadosSujeito({name, age}) {
  console.log(`Nome do sujeito: ${name}, idade do sujeito: ${age}`)
}
dadosSujeito(sujeito)

// 4. Crie um array de arrays e use a desestruturação para criar
//  variáveis a partir dos elementos array aninhado
let alimentos = [
  ["Salgadinho", "Biscoito"],
  ["Maçã", "Melancia"]
]
let [ruins, saudaveis ] = alimentos
console.log(ruins, saudaveis)
// console.log(`Ruins para o corpo: ${ruins}, saudaveis para o corpo: ${saudaveis}`)

// 5. Crie um array com um elemento e utilize a desestruturação para
//  criar duas variaveis. A primeira deve receber o valor do array
//  e a segunda deve usar um valor padrão
let [rex = 7, ona = 9] = [10]
console.log(rex, ona)

// 6. Crie duas variaveis e troque os valores entre elas utilizando desestruturação
let e = 10,
  m = 20;
[e, m] = [m, e];
console.log(e, m);
