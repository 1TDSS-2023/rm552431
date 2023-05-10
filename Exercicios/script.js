function changeColor(color) {
    document.body.style.background = color;
}

function corBotao() {
    changeColor('#a8eb34');
}

function adicionarProduto() { 
    let NomeItem = document.getElementById("item").value;
    let novoProduto = document.createElement("li");
    let conteudoProduto = document.createTextNode(NomeItem);
    novoProduto.appendChild(conteudoProduto);
    let listaProdutos = document.getElementById("lista");
    listaProdutos.appendChild(novoProduto);
    document.getElementById("item").value = "";
  }

function trocaImagem() {
    let imagem = document.getElementById("imagem");
   if (imagem.src.endsWith("imgs/img1.jpg")) {
     imagem.src = "imgs/img2.jpg";
   } else {
     imagem.src = "imgs/img1.jpg";
   }
 }

 function exibeMensagem() {
    let mensagemP = document.getElementById("mensagem");
    mensagemP.innerHTML = "Apareci!";
  }

  function ocultaElemento() {
    var elemento = document.getElementById("elemento-oculto");
    elemento.style.display = "none";
  }
