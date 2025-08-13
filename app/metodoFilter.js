const botoes = document.querySelectorAll(".btn");
botoes.forEach(btn => {
    btn.addEventListener('click', filtrarLivros)
})

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarLivrosPorDisponibilidade() : filtrarLivrosPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotalDosLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal);
    }
}

function filtrarLivrosPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarLivrosPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoParaPrecoTotalLivros.innerHTML = `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}
