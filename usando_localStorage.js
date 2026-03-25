// Isso daqui salva as preferencias do usuãrio
function salvarPreferencias(tipo, valor) {
    const prefs = JSON.parse(localStorage.getItem("preferencias")) || {}
    prefs[tipo] = valor
    localStorage.setItem("preferencias", JSON.stringify(prefs))
}

salvarPreferencias("tema", "claro")
salvarPreferencias("idioma", "português")

