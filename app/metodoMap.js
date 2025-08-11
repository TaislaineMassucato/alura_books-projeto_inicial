function aplicarDesconto(livros) {
    const desconto = 0.1;
    livrosComDesconto = livros.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })
    return livrosComDesconto;
}
