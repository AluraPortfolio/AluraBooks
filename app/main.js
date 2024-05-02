let livros = []
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivros()

async function getBuscarLivros() {
    const resp = await fetch(endPointDaAPI)
    livros = await resp.json()
    // console.table(livros)
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivros(livrosComDesconto)
}

