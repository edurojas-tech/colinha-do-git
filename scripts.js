$(document).ready(()=>{

    //elemento <body #app>
    let corpo = document.getElementById("app")
    let elementosHTML = function(){
        return `
            <section class="container text-center pt-5" id="titulo"></section>
            <section class="container" id="aboutGit"></section>

            <!-- JS CDN -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        `
    }

    corpo.innerHTML = elementosHTML()
    function renderizar(){
        let titulo = document.getElementById("titulo")
        let sobreGit = document.getElementById("aboutGit")

        //textos ou msgs
        let descTitulo = `Guia Git e GitHub <br> para iniciantes`

        // elemento HTML para seção do titulo
        const secaoTitulo = function (txtTitulo) {
            return `
            <h1>
               
                <br>
                ${txtTitulo}
            </h1>
            <hr>
            `
        }

        const secaoSobreGit = () => `<p class="textos">Aqui texto sobre o Git...</p>`
        titulo.innerHTML = secaoTitulo(descTitulo)
        sobreGit.innerHTML = secaoSobreGit()
    }
    renderizar()  
})

// <span class="icones">
// <i class="fab fa-git-alt"></i>
// </span>
// <span class="icones">
// <i class="fab fa-github"></i>
// </span>
