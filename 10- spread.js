// ========================================
// OPERADOR SPREAD
// ========================================

// ========================================
// 1. O QUE É SPREAD?
// ========================================

// Operador Spread é representado por 3 ponto (...), que permite
//  que você espelhe os elementos de um array ou de um objeto
//  em outro lugar. Isso pode ser muito útil em varias situações

let numeros = [1, 2, 3];
let maisNumeros = [...numeros, 4, 5, 6];
console.log(maisNumeros);
// Usamos o spread para criar um novo array maisNumeros, que
//  contém todos os elementos de numeros seguidos por
//  4, 5, 6. É uma forma concisa de combinar arrays

// USANDO SPREAD COM OBJETOS
let pessoa = { nome: "Marcos", idade: 24 };
let pessoaUptaded = { ...pessoa, idade: 26 };
console.log(pessoaUptaded);
// Neste exemplo, criamos um novo objeto pessoaUptaded que
//  contém todas as propriedades de pessoa, mas com idade
//  atualizada. O Spread nos permite copiar facilmente propriedades entre objetos

// ========================================
// APLICAÇÕES PRÁTICAS DO SPREAD
// ========================================

// Spread é útil em diversos momentos, como na manipulação
//  de dados e na passagem de argumentos para funções

// COPIANDO ARRAYS
let original = [1, 2, 3];
let copia = [...original];
console.log(copia);
// Usando o Spread dessa maneira, você cria uma cópia superficial
//  do array. Isso é particulamente útil quando você não quer
//  que as mudanças no novo array afetem o original

// CONCATENANDO ARRAYS
let inicio = [1, 2];
let fim = [3, 4];
let combinado = [...inicio, ...fim];
console.log(combinado);
// O Spread torna a concatenação de arrays uma tarefa simples e limpa.

// ESPALHANDO ARGUMENTOS
function somar(a, b, c) {
  return a + b + c;
}

let Numeros = [1, 2, 3];
console.log(somar(...Numeros));
// Aqui espalhamos os elementos de Numeros como argumentos
//  individuais para função somar

// COMBINANDO OBJETOS
let objeto1 = { a: 1, b: 2 };
let objeto2 = { c: 3, d: 4 };
let combinando = { ...objeto1, ...objeto2 };
console.log(combinando);
// Spread também é eficaz para combinar ou clonar objetos

// ========================================
// APLICAÇÕES PRÁTICAS DO SPREAD
// ========================================

// 1. Use o operador spread para combinar dois
//  arrays de itens de supermercado em uma lista de compras

let lista1 = ["Macarrão", "Tomates", "Carne"];
let lista2 = ["Arroz", "Ovos", "Feijão"];
let juncao = [...lista1, ...lista2];
console.log(juncao);

// 2. Crie um objeto usuario com propriedades como nome e email.
//  Use o spread para criar um novo objeto com os dados
//  do usuário e uma propriedade adicional status

let usuario = { nome: "Fred", email: "fred_email@gmail.com" };
let adicionandoStatus = { ...usuario, status: "solteiro" };
console.log(adicionandoStatus);

// 3. Crie uma função que aceita um número variável de nomes
//  e os imprime como lista de convidados para um festa de
//  aniversario, usando o operador spread para coletar nomes

function imprimirConvidados(...nomes) {
  console.log("Lista de convidados:")
  nomes.forEach((nome, i) => {
    console.log(`${i + 1}. ${nome}`)
  })
}

let convidados = ["Marcos", "João", "Rafael", "Matheus"];
imprimirConvidados(...convidados);

// 4. Dado um array de músicas, crie uma cópia do array usando
//  o operador spread. Altere um elementos no array copiado e
//  verifique se o array orignal permanece inalterado

let musicas = ["Faded", "Alone", "Sing me to sleep"];
let modificandoMusicas = [...musicas, "Darkside"];
console.log(musicas);
console.log(modificandoMusicas);

// 5. Crie dois objetos, um com informações básicas de um filme
//  (título e diretor), e outro com informações
//  complementares (ano, gênero). Use o operador spread para
//  mesclar esses objetos em um único objeto filme.

let dadosFilme = { titulo: "Megamente", diretor: "Tom McG." };
let maisDadosFilme = { ano: 2010, genero: "Animação" };
let combinandoDadosFilme = { ...dadosFilme, ...maisDadosFilme };
console.log(combinandoDadosFilme);

// 6. Faça uma função chamado "criarMenu" que aceita varios itens
//  (entrada, pratos principais, sobremesas) como arrays e usa
//  o operador spread para criar um único array de menu

function criarMenu(entrada, pratos, sobremesas) {
  return [...entrada, ...pratos, ...sobremesas]
}

let entrada = ["Salada", "Sopas"];
let pratos = ["Bife à cavalo", "Feijoada"];
let sobremesas = ["Pudim", "Torta", "Bolo"];

console.log(criarMenu(entrada, pratos, sobremesas))