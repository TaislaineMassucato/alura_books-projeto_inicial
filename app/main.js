let livros = [];
//requisição link json
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();


async function getBuscarLivrosDaAPI() {
  //buscar dados de um servidor
  const res = await fetch(endpointDaAPI);
  // transforma a resposta em JSON
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);

  exibirOsLivrosNaTela(livrosComDesconto);
}


