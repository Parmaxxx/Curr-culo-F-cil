function mostrarConteudo(id) {
    var conteudos = document.getElementsByClassName("conteudo");
    for (var i = 0; i < conteudos.length; i++) {
      conteudos[i].style.display = "none";
    }
    
    var conteudo = document.getElementById(id);
    conteudo.style.display = "block";
  }