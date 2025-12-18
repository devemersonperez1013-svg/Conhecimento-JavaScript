// =====================================
// Exercício de Objetos - JavaScript
// =====================================

// -----------------------------------
// Nível 1: Básico
// -----------------------------------

/* 
Exercício 1: Criar um objeto simples
Crie um objeto chamado 'cachorro' com as propriedades:
- nome: "Rex"
- raca: "Labrador"
- idade: 3
*/

const cachorro = {
    nome: "Rex",
    raca: "Labrador",
    idade: 3
}


/* 
Exercício 2: Acessar propriedades
Usando o objeto 'cachorro' criado acima, 
imprima no console o nome e a raça do cachorro.
*/

console.log(`O nome do cachorro é ${cachorro.nome}, a raça dele é ${cachorro.raca}, e ele tem ${cachorro.idade} anos`)
// for (const dado in cachorro) {
//     console.log(`${dado}: ${cachorro[dado]}`)
// }


/* 
Exercício 3: Adicionar propriedades
Adicione uma nova propriedade 'cor' com o valor "Dourado" 
ao objeto cachorro.
*/

cachorro.cor = "Dourado"
// console.log(cachorro)


/* 
Exercício 4: Modificar propriedades
Mude a idade do cachorro para 4 anos.
*/

cachorro.idade = 4
// console.log(cachorro)


/* 
Exercício 5: Criar objeto com método
Crie um objeto 'gato' com:
- nome: "Mia"
- miar: um método que imprime "Miau!"
Depois chame o método miar.
*/

const gato = {
    nome: "Mia",
    miar: function() {
        return "Miau :3"
    }
}

console.log(gato.miar())