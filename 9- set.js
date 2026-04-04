// ========================================
// ESTRUTURA DE DADOS MAP
// ========================================

// O que é Set?
/**
 * Set é similar ao array, mas seus valores dentro são unicos
 * Não contém repetição, parecido com uma lista com IDs unicos
 */

// Criando Set
let meuSet = new Set();
// Criamos isso para guardar os itens que serão guardados, mas só uma de cada tipo

// ========================================
// ADICIONANDO VALORES AO SET
// ========================================

// Para adicionar, usamos o método add
meuSet.add(1)
meuSet.add(2)
meuSet.add(2)   // Esse código aqui não vai funcionar pois já tem no Set

// ========================================
// VERIFICANDO PRESENÇA DE VALORES
// ========================================

// Usamos has para saber se tem algo 
console.log(meuSet.has(1))
console.log(meuSet.has(3))  // vai dar false porque não existe o 3

// ========================================
// CONTANDO OS VALORES
// ========================================

// Para saber quantos itens há, use size
console.log(meuSet.size)
// Aqui vai mostrar no console 2

// ========================================
// IMPRIMINDO ITENS DO SET
// ========================================

// Vamos iterar ele da seguinte forma:
for (let valor of meuSet) {
    console.log(valor)
}
// Aqui passamos cada valor do Set dando um print. Muito prático!

// ========================================
// LIMPANDO A CASA
// ========================================

// Sets tem outros métodos como delete e clear
meuSet.delete(1)    // Limpar um item especifico
meuSet.clear()  // Limpa tudo

// ========================================
// NO DIA A DIA
// ========================================

// Sets são otimos quando precisa de uma lista sem repetição, use quando quer garantir que nada seja repetido

// Exemplo
let numeros = [1, 2, 3, 2, 1]
let numerosUnicos = new Set(numeros)
console.log([...numerosUnicos])
// Pegamos o array com numeros repetidos e convertemos em Set, e convertemos de volta para array, mas com valores unicos

// ========================================
// EXERCICIO
// ========================================
// 1. Crie um Set chamado frutas e adicione nele três frutas diferentes. Depois, tente adicionar uma fruta que já está no Set.
const frutas = new Set()
frutas.add('Maçã')
frutas.add('Banana')
frutas.add('Uva')
// frutas.add('Maçã')

// 2. Use o método has para verificar se uma fruta específica está no seu Set frutas.
console.log(frutas.has('Maçã'))

// 3. Use o método delete para remover uma fruta do seu Set frutas
frutas.delete('Banana')

// 4. Use o método clear para limpar todod o seu Set frutas
frutas.clear()

// 5. Crie um Set com vários valores e use a propriedade size para imprimir o número de elementos no Set.
const livro = new Set()
livro.add('page 1')
livro.add('page 2')
livro.add('page 3')

console.log(livro.size)

// 6. Use um loop for...of para iterar sobre seu Set e imprimir cada valor
for (const pagina of livro) {
    console.log(pagina)
}

// 7. Crie um array com alguns valores duplicados. Em seguida, crie um Set a partir desse array para remover as duplicatas.
let numerosPares = [2, 4, 6, 8, 2, 6]
const numeroParesUnicos = new Set(numerosPares)
console.log([...numeroParesUnicos])