// Objetos
/* 
O que são Objetos?
Em JavaScript, um objeto é uma coleção de propriedades, e uma propriedade é uma associaçào 
entre uma chave e um valor. O valor de um propriedade pode ser uma função, que é então 
conhecida como um método do objeto.
*/

// Exemplo de criação de objeto:
let pessoa = {
    nome: "Emerson",
    idade: 22,
    falar: function() {
        console.log(`Oi, meu nome é ${this.nome}`)
    }
}
/*
Aqui criamos um objeto pessoa com três propridades: nome, idade e falar. Falar é um método
dentro de um objeto
*/
//OBS: function() é uma função sem nenhum parâmetro

// Acessando Propriedades e Métodos
// Para acessa-los de um objeto, usamos a notação de ponto ou colchetes

// Exemplo:
console.log(pessoa.nome) // Acessando a propriedade 'nome'
pessoa.falar() // Chamando o método 'falar'
// Aqui estamos acessando o nome do objeto pessoa, e chamamos o método falar
// Para deletar uma propriedade, usamos delete
pessoa.profissao = "Desenvolvedor" // Criamos um
delete pessoa.profissao // deletamos ela


// Alterando e Adicionando Propriedades
/*
Você pode alterar propriedades de um objeto ou 
adicionar novas propriedades a ele após sua criação.
*/

// Exemplo:
pessoa.idade = 30 // Modificando a idade para 30 anos
pessoa.sobrenome = 'Silva' // Adicionando nova propriedade 'sobrenome'
// Alterando a propriedade idade e adicionamos uma nova propriedade sobrenome ao objeto pessoa

// Iterando sobre Propriedades
// Podemos percorrer todas as propriedades de um objeto usando um loop for... in

// Exemplo:
for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
}

// Objetos como Referências
/*
No JavaScript, objetos são referenciados. Quando você atribui a um objeto a uma variável,
está passando uma referência a esse objeto.
Ou seja, se você faz uma cópia de um objeto, e altera alguma propriedade, o objeto original
também será alterado
*/

// Exemplo:
let outraPessoa = pessoa // Cria uma referência
outraPessoa.nome = 'Maria'
console.log(pessoa.nome) 
// outraPessoa é uma referência ao mesmo objeto que pessoa. Ao mudar o nome através de outraPessoa, o objeto original pessoa também é alterado.

// Métodos Avançados
// JavaScript oferece métodos avançados para trabalhar com objetos, como Object.keys(), Object.values(), e Object.entries()

// Exemplo:
console.log(Object.keys(pessoa))
// Object.keys(pessoa) retorna um array com os nomes das propriedades do objeto pessoa.
console.log(Object.values(pessoa))
// Object.values retorna array com os valores
console.log(Object.entries(pessoa))
// Objct.entries retorna arrays de array -> [["nome", "Maria"], ["idade", 30], ...]



// +++++ Exercicio ++++++
/*
1. Crie um objeto chamado carro com as propriedades como marca, modelo e ano. 
em seguida, acesse e imprima a propriedade modelo do objeto
*/
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2005
}
// console.log(carro.modelo)

/*
2. No objeto carro criado, adicione uma propriedade cor e modifique o ano do carro. 
Imprima o objeto modificado.
*/
carro.cor = "Vermelho"
carro.ano = 2007
console.log(carro)

/*
3. Crie um objeto chamado calculdora com um método soma que aceite dois números e retorne o objeto modificado
*/
const calculadora ={
    soma: function(a, b) {
        return a + b
    }
}
console.log(calculadora.soma(3, 3))

/*
4. Dado um objeto, use um loop for... in para iterar sobre todas as suas 
propriedades e imprimir cada uma delas
*/
for (const tipo in carro) {
    console.log(`${tipo}: ${carro[tipo]}`)    
}

/*
5. Crie um objeto livro com propriedades como titulo e autor. Em seguida, crie outra 
variável que referencie o objeto livro e modifique titulo. Verifique se o 
objeto original foi alterado
*/
const livro = {
    titulo: "Steven Universe",
    autor: "James Baxter"
}
console.log(livro.titulo) // Antes

let outroLivro = livro
outroLivro.titulo = "Hora de Aventura"
console.log(livro.titulo) // Depois

/*
6. Dado um objeto, use o método Object.keys() para listar todas as chaves do objeto. 
Repita o processo com Object.values para listar todos os valores
*/
console.log(Object.keys(livro))
console.log(Object.values(livro))
console.log(Object.entries(livro))

// ---------------------
// Dicas Extras
// ---------------------

// Verificar se existe propriedade
console.log("titulo" in livro)
console.log(livro.hasOwnProperty("autor"))

// Prevenir moificações em objeos
const objetoCongelado = Object.freeze({ valor: 10 })
objetoCongelado.valor = 20 // Não vai ser modificado
console.log(objetoCongelado.valor)