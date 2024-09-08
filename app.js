function pesquisar() {
  // Imprime uma mensagem no console para fins de depuração
  console.log("Clicou tomou");

  // Seleciona o elemento HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section);

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";


  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "<p>Não foi localizado informações sobre este atleta.<p>"
    return;
  }

  //tornar os caracteres minusculos para facilitar a comparação e nao ter chance de não localizar as informações
  campoPesquisa = campoPesquisa.toLowerCase();

  // Itera sobre os dados da pesquisa e constrói o HTML dos resultados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()

    // se titulo includes campoPesquisa, entao, faça...
    if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      //cria um novo elemento  
      resultados += `
            <div class="item-resultado">
              <h2> <a href="${dado.link}" target="_blank">${dado.titulo}</a> </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank"> Mais Informações</a>
            </div>
          `;
    }
    //valor digitado na barra de pesquisa, mas não localizado nenhum valor na base.
    if (!resultados){
      resultados = "<p>Não foi localizado informações.</p>" 
    }
  }

  // Atribui o HTML construído ao elemento section
  section.innerHTML = resultados;
}