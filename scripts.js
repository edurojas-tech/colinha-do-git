let titulo = document.getElementById("titulo")
let sobreGit = document.getElementById("aboutGit")

let descTitulo = `Guia Git e GitHub para iniciantes`

// elemento HTML para seção do titulo
const secaoTitulo = function (txtTitulo) {
    return `
    <h1>
        <span class="icones">
            <i class="fab fa-git-alt"></i>
        </span>
        ${txtTitulo}
        <span class="icones">
            <i class="fab fa-github"></i>
        </span>
    </h1>
    <hr>
    `
}

const secaoSobreGit = () => `<p class="textos">Aqui texto sobre o Git...</p>`

titulo.innerHTML = secaoTitulo(descTitulo)
sobreGit.innerHTML = secaoSobreGit()