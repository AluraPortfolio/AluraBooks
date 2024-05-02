const btnSortPrice = document.getElementById('btnOrdenarPorPreco')
btnSortPrice.addEventListener('click', orderBooksPrice)

function orderBooksPrice() {
    let OrderedBooks = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(OrderedBooks)
}