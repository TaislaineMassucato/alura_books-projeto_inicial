const elementoParaInserirLivros = document.getElementById('livros');
let elementoParaPrecoTotalLivros = document.getElementById("valor_total_livros_disponiveis");

function exibirOsLivrosNaTela(listaDeLivros) {
  elementoParaInserirLivros.innerHTML = '';
  elementoParaPrecoTotalLivros.innerHTML = '';
  
  listaDeLivros.forEach(livro => {
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.descricao}</p>
      <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div> `
  });
}