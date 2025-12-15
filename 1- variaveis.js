// Var é uma das variaveis antigas de se declarar, mas não é recomendado usa-lo
// Exemplo:
if (true) {
    var exemploVar = "Eu sou global"
}
console.log(exemploVar) 

// let é a variavel mais novo do seu anterior (var). let é mais organizado e respeita limites onde foi declarado.
// Se for declarado em um if, fora dele ninguem vai conhece. Só fica na área dele
// Exemplo:
if (true) {
    let exemploLet = "Só existo aqui dentro, tá?"
}
console.log(exemploLet) // Não vai funcionar essa chamada, pois não conhece o "exemploLet"

// const é uma constante, mais firme do que seu irmão. Uma vez que dá o valor para ele, não pode mudar mais.
// O ideal é usa-lo nos valores que não precisa de modificação, e que sejam apenas constantes.
// Exemplo:
const exemploConst = "Sou firmeza, não mudo"
exemploConst = "Vou tentar mudar" // Nesse caso não muda mesmo, vai dar Erro!

// Nomemclatura de variaveis
// Não funciona ao declarar na variavel, como: let 1nome -> não vai dar certo; 
// Nem com separação no nome da variavel: let minha trajetoria -> vai dar bug
// So é possivel declarar (sem dar erro) dessas seguintes maneiras:
let _idade = 20 // sublinhado
let $dinheiro = "pouco" // com alguns sinais
let temDuvidas = "Deixe um comentario" // Declarando com estilo camelCase (rotação camelo)
// Exemplo no que pode falhar -> let 1chance = "não rola";
// No caso queira escreve de outra forma sem que seja a separação, pode tentar assim:
let meuSonho = "desse jeito pode"

// Há algumas palavras que não podem ser utilzadas, pois ja pertecem na linguagem
// Exemplo dos que nao pode declarar: 
// 1. let if = "não pode usar";
// 2. let let = "isso aqui vai dar erro...";

// No Case Sensitive, duas variaveis com o mesmo nome pode gerar erro, mas...
// se uma delas tiver uma letra maiscula em qualquer palavra, o javascript entende que é uma variavel diferente da outra
// Exemplo:
let vidaDeDev = "uma"
let VidaDeDev = "outra"

// No JavaScript tem tipos de dados como:
// String: São textos, tudo o que esta entre aspas vira tipo String (seja aspas simples ou duplas)
let nome = "JavaScript"
let frase = 'Mudou minha vida'

// Number: Somente números, decimal, inteiro, negativo, ou positivo, é aceito
let idade = 20 // Inteiro (Int)
let pi = 3.14 // Decimal (float)

// Booleano: Só há dois valores, true (verdade), e false (falso), é como sim e não na linguagem
let amoCodar = true
let odeioCodar = false

// Undefined: É um tipo de varivel que não tem valor, o que torna ela indefinida
let vazio; console.log(vazio); // Vai mostar 'undefined'

// Null: Similar ao outro, mas deixa a claro que não passa nenhum valor
let semValor = null; // Não imprime nada

// Object: É uma coleção de dados digamos assim, o pacote chamado "pessoa" contém nome, idade, e limguagem favorita, com seus respectivos valores declarados
let pessoa = {
    nome: "Dev",
    idade: "20",
    linguagemFavortita: "JavaScript"
}

// Array: É uma lista de "coisas", pode conter números, strings, objetos e, até outros arrays
let linguagens = ["JavaScript", "Python", "Ruby"]

// Symbol: Raramente usado, mas funciona. É um identificador único, algo que não muito usado para iniciantes
let id = Symbol('id')