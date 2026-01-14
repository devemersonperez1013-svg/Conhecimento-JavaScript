// ========================================
// ESTRUTURA DE DADOS MAP
// ========================================

// ========================================
// 1. O QUE É UM MAP?
// ========================================
/*
Map é uma coleção de pares chave-valor. Diferente dos objetos, 
no Map, as chaves podem ser de qualquer tipo (até objetos/funções). 
Além disso, ele mantém a ordem de inserção, o que pode ser mega útil em 
algumas situações
*/ 
// Exemplo de criação de um Map
let meuMap = new Map()
// Ele é como um "super objeto", mais flexível e com super poderes

// ========================================
// 2. ADICIONANDO ELEMENTOS
// ========================================

// Usamos o método set para adicionar a chave-valor
meuMap.set('chave1', 'valor1')      // Adicionamos chave1 com valor1
meuMap.set('chave2', 'valor2')      // Adicionamos chave2 com valor2

// ========================================
// 3. ACESSANDO ELEMENTOS   
// ========================================

// Usamos o método get para pegar o valor associado a "chave1". Isso retorna o "valor1"
console.log(meuMap.get('chave1')) // valor1

// ========================================
// 4. ITERANTO SOBRE UM MAP   
// ========================================

// Loop for... of
for (const [chave, valor] of meuMap) {
    console.log(`${chave}: ${valor}`)
}
// Usamos for... of para desestruturar cada par chave-valor e imprimimos eles
// Super prática para ver dentro do Map

// ========================================
// 5. MÉTODOS ÚTEIS DO MAP
// ========================================

console.log(meuMap.size)                // 2
meuMap.delete('chave2')                 // Remove a chave 'chave2'
console.log(meuMap.has('chave2'))       // false
// Explicação:
// - size nos mostra quantos pares chave-valor há no Map
// - delete remove um par baseado na chave.
// - has verifica se uma chave especifíca existe no Map

// MÉTODOS ADICIONAIS
let map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

// forEach (como em arrays):
map.forEach((valor, chave) => {
    console.log(`${chave}: ${valor}`)
})

// clear (limpa tudo):
map.clear()
console.log(map.size)  // 0

// values() - só os valores:
let map2 = new Map([['a', 1], ['b', 2]])
console.log([...map2.values()])  // [1, 2]

// entries() - pares chave-valor:
console.log([...map2.entries()])  // [['a', 1], ['b', 2]]

// ========================================
// 6. QUANDO USAR UM MAP?
// ========================================
/*
Map é perfeito quando precisa de uma colação de pares chave-valor, onde as
chaves são únicas e podem ser de qualquer tipo. É uma escolha melhor do que
objetos, quando as chaves são desconhecidas até o tempo de execução, ou 
quando todas as chaves são do mesmo tipo e os valores também.
*/

// ========================================
// 7. CONVERTENDO MAP PARA OBJETOS E ARRAYS
// ========================================

let mapParaObjeto = Object.fromEntries(meuMap)
console.log(mapParaObjeto)          // {chave1: 'valor1'}

let chavesArray = [...meuMap.keys()]
console.log(chavesArray)            // ['chave1']
// Explicação:
// - Object.fromEntries transforma o Map em um Objeto
// - Usando spread (...), pegamos todas as chaves ou valores do Map e colocamos em um array

// ========================================
// 8. EXECÍCIOS PARA PRATICAR:
// ========================================

/* 
1. Crie um "Map" chamado "livros" e adicione nele três pares 
chave-valor, onde a chave é o título do livro e o valor é o autor
*/
let livros = new Map()
livros.set('Dom Casmurro', 'Machado de Assis')
livros.set('1984', 'George Orwell')
livros.set('Cem Anos', 'Gabriel García Marquez')

/*
2. Acesse o valor associado a uma das chaves no "Map" "livros" e 
imprime o nome do autor.
*/
console.log(livros.get('Dom Casmurro'))

/*
3. Use o loop for... of para iterar sobre o "Map" "livros" e 
imprime todos os pares chave-valor
*/
for (const [titulo, autor] of livros) {
    console.log(`${titulo}: ${autor}`)
}

/*
4. No seu "Map" "livros", use o método size para imprimir o número 
de livros, delete para remover um livro pelo título e has para verificar 
se um livro ainda está no Map
*/
console.log(livros.size)
livros.delete("Dom Casmurro")
console.log(livros.has("Dom Casmurro"))

/*
5. Crie um Map chamado colecao que contém diferentes tipos de 
chaves (como string, number, object) e seus respectivos valores
*/
let colecao = new Map()
colecao.set('string', 'Palavras')
colecao.set(2, 'I am a number')
colecao.set({id: 1}, 'Objeto')

console.log(colecao.size)

let pessoa = {
    nome: "Ana",
    idade: 28,
    cidade: "RJ"
}

// Pego o chave e valor do objeto
let entradasParaMap = Object.entries(pessoa)

// Crio um Map novo a partir da variavel criada
const pessoaMap = new Map(entradasParaMap)