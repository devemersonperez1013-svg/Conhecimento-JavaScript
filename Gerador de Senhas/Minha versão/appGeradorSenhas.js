const btnGerar = document.getElementById('gerar')
const btnCopiar = document.getElementById('copiar')

// Colocar a função check letrasMaiusculas no botão gerar
btnGerar.addEventListener('click', function() {
    let comprimento = document.getElementById('comprimento').value

    // Validar se digitou um número válido
    if (comprimento < 1) {
        alert('Digite um comprimento válido!')
        return
    }

    let senha = gerarSenha(comprimento)
    document.getElementById('senha').textContent = senha
})

btnCopiar.addEventListener('click', function() {
    let senha = document.getElementById('senha')
    let copiarSenha = senha.textContent

    if (copiarSenha.trim() === '') {
        alert("Gere primeiro a senha para ser copiada")
        return
    }

    navigator.clipboard.writeText(copiarSenha).then(() => {
        alert("Senha copiada com sucesso")
    }).catch(err => {
        console.error('Erro ao copiar:', err)
        alert("Não foi possivel copiar")
    })
})

function gerarSenha(comprimento) {
    let checkMaiusculas = document.getElementById('lMaiusculas').checked
    let checkMinusculas = document.getElementById('lMinusculas').checked
    let checkNumeros = document.getElementById('numeros').checked
    let checkSimbolos = document.getElementById('simbolos').checked
    
    let caracteres = ''
    if (checkMaiusculas) {
        caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }
    if (checkMinusculas) {
        caracteres += 'abcdefghijklmnopqrstuvwxyz'
    }
    if (checkNumeros) {
        caracteres += '0123456789'
    }
    if (checkSimbolos) {
        caracteres += '!@#$%^&*()_+[]{}|;:,.<>?'
    }

    // Validando se algumas dos checkboxes foi marcada
    if (caracteres === '') {
        alert('Marque pelo menos uma opção')
        return ''
    }
    
    let senha = ''
    for (let i = 0; i < comprimento; i++) {
        let indice = Math.floor(Math.random() * caracteres.length)
        senha += caracteres[indice]        
    }
    return senha
}