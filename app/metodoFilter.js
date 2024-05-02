const btnFilter = document.querySelectorAll('.btn')
btnFilter.forEach(btn => btn.addEventListener('click', filterBooks))

function filterBooks() {
    const elementBtn = document.getElementById(this.id)
    const categoria = elementBtn.value
    let filteredBooks = categoria == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    // console.table(filteredBooks)
    exibirLivros(filteredBooks)
    if (categoria == "disponivel") {
        const valortotal = calcularValorTotalDelivro(filteredBooks)
        exibirValorTotalDisponivel(valortotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

// function exibirValorTotalDisponivel(valortotal) {
//     elementoParaInserirLivros.innerHTML = `
//     <div class="livros__disponiveis">
//         <p>Todos os livros disponíveis por R$ <span id="valor">${valortotal}</span></p>
//     </div>
//     `
// }