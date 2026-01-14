// ========================================
// 1. O QUE SÃO OBJETOS?
// ========================================
/*
Em JavaScript, um objeto é uma coleção de propriedades.
Uma propriedade é uma associação entre uma chave e um valor.
O valor de uma propriedade pode ser uma função (método do objeto).
*/

// Exemplo básico de criação de objeto:
let pessoa1 = {
    nome: "Emerson",
    idade: 22,
    falar: function() {
        console.log(`Oi, meu nome é ${this.nome}`) // this -> "Emerson"
    }
}

// OBS: function() é uma função sem parâmetros
// this aponta para o objeto que "chamou" o método


// ========================================
// 2. ACESSANDO PROPRIEDADES E MÉTODOS
// ========================================

// Notação de ponto (mais comum):
console.log(pessoa1.nome)  // "Emerson"
pessoa1.falar()            // Chama o método

// Notação de colchetes (mais flexível):
console.log(pessoa1["nome"])  // "Emerson"

// QUANDO USAR COLCHETES:
let carro = {
    marca: "Fiat",
    modelo: "Uno",
    "nome completo": "Fiat Uno",  // Propriedade com espaço
    "e-mail": "contato@fiat.com"  // Caractere especial
}

// 1. Propriedade com espaço ou caracteres especiais:
console.log(carro["nome completo"])  // Não dá para usar ponto!

// 2. Propriedade em variável (acesso dinâmico):
let propriedade = "marca"
console.log(carro[propriedade])   // "Fiat"
console.log(carro.propriedade)    // undefined


// ========================================
// 3. ALTERANDO E ADICIONANDO PROPRIEDADES
// ========================================

pessoa1.idade = 30                    // Modificando propriedade
pessoa1.sobrenome = "Silva"           // Adicionando nova propriedade
pessoa1.profissao = "Desenvolvedor"   // Criando propriedade
delete pessoa1.profissao              // Deletando propriedade


// ========================================
// 4. ITERANDO SOBRE PROPRIEDADES
// ========================================

// Loop for...in percorre todas as propriedades:
for (const chave in pessoa1) {
    console.log(`${chave}: ${pessoa1[chave]}`)
}


// ========================================
// 5. OBJETOS COMO REFERÊNCIAS
// ========================================
/*
IMPORTANTE: Objetos são passados por referência!
Ao atribuir um objeto a outra variável, você cria uma referência,
não uma cópia. Alterações afetam o objeto original.
*/

let outraPessoa = pessoa1      // Cria uma referência
outraPessoa.nome = "Maria"     // Altera o original também!
console.log(pessoa1.nome)      // "Maria"


// ========================================
// 6. MÉTODOS AVANÇADOS DE OBJETOS
// ========================================

let pessoa2 = { nome: "João", idade: 25, cidade: "SP" }

// Object.keys() - retorna array com as chaves:
console.log(Object.keys(pessoa2))     // ["nome", "idade", "cidade"]

// Object.values() - retorna array com os valores:
console.log(Object.values(pessoa2))   // ["João", 25, "SP"]

// Object.entries() - retorna array de arrays [chave, valor]:
console.log(Object.entries(pessoa2))  // [["nome", "João"], ["idade", 25], ...]


// ========================================
// 7. FORMAS DE DECLARAR MÉTODOS
// ========================================

// Forma antiga (ES5):
let pessoaA = {
    nome: "João",
    falar: function() {
        console.log(`Oi, sou ${this.nome}`)
    }
}

// Forma moderna (ES6+) - mais limpa:
let pessoaB = {
    nome: "João",
    falar() {  // Sem a palavra 'function'
        console.log(`Oi, sou ${this.nome}`)
    }
}

// Arrow function (CUIDADO com this!):
let pessoaC = {
    nome: "João",
    falar: () => {
        console.log(this.nome)  // this NÃO funciona como esperado aqui!
    }
}
// NOTA: Arrow functions não têm seu próprio "this"!
// Para métodos de objetos, use funções normais.


// ========================================
// 8. DESESTRUTURAÇÃO DE OBJETOS
// ========================================

let pessoaD = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
}

// Forma antiga:
let nome = pessoaD.nome
let idade = pessoaD.idade

// Forma moderna (destructuring):
let { nome: n, idade: i } = pessoaD
console.log(n)   // "João"
console.log(i)   // 25

// Com renomeação:
let { nome: nomeCompleto, idade: anos } = pessoaD
console.log(nomeCompleto)  // "João"
console.log(anos)          // 25


// ========================================
// 9. VERIFICANDO PROPRIEDADES
// ========================================

let livro = { titulo: "1984", autor: "Orwell" }

// Usando operador 'in':
console.log("titulo" in livro)  // true

// Usando hasOwnProperty:
console.log(livro.hasOwnProperty("autor"))  // true


// ========================================
// 10. PREVENINDO MODIFICAÇÕES
// ========================================

// Object.freeze() - Congela tudo (não modifica, não adiciona, não deleta)
const objetoCongelado = Object.freeze({ valor: 10 })
objetoCongelado.valor = 20          // ❌ Não funciona
objetoCongelado.novaPropriedade = 5 // ❌ Não funciona
delete objetoCongelado.valor        // ❌ Não funciona
console.log(objetoCongelado.valor)  // 10 (não mudou!)

// Object.seal() - Permite modificar, mas não adicionar/deletar
const objetoSelado = Object.seal({ valor: 10 })
objetoSelado.valor = 20      // ✅ Funciona! (pode modificar)
objetoSelado.nova = 5        // ❌ Não funciona (não pode adicionar)
delete objetoSelado.valor    // ❌ Não funciona (não pode deletar)


// ========================================
// 11. EXERCÍCIOS PRÁTICOS
// ========================================

// Exercício 1: Criar e acessar propriedades
const carro1 = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2005
}
console.log(carro1.modelo)  // "Uno"

// Exercício 2: Adicionar e modificar propriedades
carro1.cor = "Vermelho"
carro1.ano = 2007
console.log(carro1)

// Exercício 3: Criar método em objeto
const calculadora = {
    soma: function(a, b) {
        return a + b
    }
}
console.log(calculadora.soma(3, 3))  // 6

// Exercício 4: Iterar sobre propriedades
for (const tipo in carro1) {
    console.log(`${tipo}: ${carro1[tipo]}`)
}

// Exercício 5: Objetos como referência
const livro1 = {
    titulo: "Steven Universe",
    autor: "James Baxter"
}
console.log(livro1.titulo)  // Antes: "Steven Universe"

let outroLivro = livro1
outroLivro.titulo = "Hora de Aventura"
console.log(livro1.titulo)  // Depois: "Hora de Aventura" (modificou original!)

// Exercício 6: Métodos Object
console.log(Object.keys(livro1))     // ["titulo", "autor"]
console.log(Object.values(livro1))   // ["Hora de Aventura", "James Baxter"]
console.log(Object.entries(livro1))  // [["titulo", "..."], ["autor", "..."]]


// ========================================
// 12. COMPARTILHAMENTO DE MÉTODOS
// ========================================

let pessoa3 = {
    nome: "Maria",
    falar: pessoa1.falar  // Reutiliza o método de pessoa1
}

pessoa1.falar()  // "Oi, meu nome é Emerson"
pessoa3.falar()  // "Oi, meu nome é Maria"


let carro1 = { marca: "Fiat" }
let carro2 = carro1
let carro3 = { marca: "Fiat" }

console.log(carro1 === carro2)
console.log(carro1 === carro3)