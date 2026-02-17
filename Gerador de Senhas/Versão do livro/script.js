document.getElementById('gerar').addEventListener('click', function() {
    // O comprimento está pegando o valor do input
    let comprimento = document.getElementById('comprimento').value
    // Pega os inputs com suas variaveis respectivas a cada input
    let maiusculas = document.getElementById('maiusculas').checked
    let minusculas = document.getElementById('minusculas').checked
    let numeros = document.getElementById('numeros').checked
    let especiais = document.getElementById('especiais').checked

    // Valida se está vazio o input, mostra a mensagem de erro
    if (comprimento <=0) {
        document.getElementById('feedback').textContent = 'Comprimento inválido!'
        return
    }

    // senha recebe a função gerarSenha com seus checks
    let senha = gerarSenha(comprimento, maiusculas, minusculas, numeros, especiais)
    // Imprime o resultado da variavel senha da função
    document.getElementById('senha').textContent = senha
    // Mostra a mensagem de sucesso
    document.getElementById('feedback').textContent = 'Senha gerada com sucesso!'
})

// Faz um evento no botão copiar, que copiar do navegador para o sistema e valida se deu certo
document.getElementById('copiar').addEventListener('click', function() {
    let senha = document.getElementById('senha').textContent
    navigator.clipboard.writeText(senha).then(function() {
        document.getElementById('feedback').textContent = 'Senha copiada para a área da transferência!'
    })
})

// Função gerarSenha com suas verificações e escolhe aletoriamente a senha usando o Math.floor e Math.random
function gerarSenha(comprimento, maiusculas, minusculas, numeros, especiais) {
    let caracteres = ''
    if (maiusculas) caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (minusculas) caracteres += 'abcdefghijklmnopqrstuvwxyz'
    if (numeros) caracteres += '0123456789'
    if (especiais) caracteres += '!@#$%^&*()_+[]{}|;:,.<>?'

    let senha = ''
    for (let i = 0; i < comprimento; i++) {
        let indice = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[indice]
    }
    // Retorna o valor da senha
    return senha
}