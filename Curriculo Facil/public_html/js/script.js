$(document).ready(function() {
  $("#modelo").change(function () {
    var modeloSelecionado = $(this).val();
    var iframe = $("#iframe");

    if (modeloSelecionado === "modeloCurriculo.html") {
      iframe.attr("src", "modeloCurriculo.html");
    } else if (modeloSelecionado === "modeloCurriculo2.html") {
      iframe.attr("src", "modeloCurriculo2.html");
    } else {
      // Modelo inv�lido
      alert("Por favor, escolha um modelo v�lido");
    }
  });
 function aplicarCor() {
    var corEscolhida = document.getElementById("cor").value;
    var pdfIframe = document.getElementById("iframe");
    var iframeDoc = pdfIframe.contentDocument || pdfIframe.contentWindow.document;

    // Altere o seletor abaixo de acordo com o elemento HTML do PDF onde você deseja aplicar a cor
    var elementoPdf = iframeDoc.querySelector("#seu_elemento_pdf");

    // Aplica a cor ao elemento
    elementoPdf.style.color = corEscolhida;
  }
  function atualizarIframe() {
    var iframe = $("#iframe")[0];
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

    var nome = $("#nome").val();
    var email = $("#email").val();
    var telefone = $("#telefone").val();
    var endereco = $("#endereco").val();
    var objetivo = $("#objetivo").val();
    var formacaoAcademica = $("#formacaoAcademica").val();
    var experienciaProfissional = $("#experienciaProfissional").val();

    innerDoc.getElementById("nome").innerText = nome;
    innerDoc.getElementById("informacoesContato").innerText = "Email: " + email + " | Telefone: " + telefone;
    innerDoc.getElementById("endereco").innerText = endereco;
    innerDoc.getElementById("objetivo").innerText = objetivo;
    innerDoc.getElementById("formacaoAcademica").innerText = formacaoAcademica;
    innerDoc.getElementById("experienciaProfissional").innerText = experienciaProfissional;
  }

  $("#nome").on("input", atualizarIframe);
  $("#email").on("input", atualizarIframe);
  $("#telefone").on("input", atualizarIframe);
  $("#endereco").on("input", atualizarIframe);
  $("#objetivo").on("input", atualizarIframe);
  $("#formacaoAcademica").on("input", atualizarIframe);
  $("#experienciaProfissional").on("input", atualizarIframe);
});

function gerarPDF() {

    var iframe = document.getElementById("iframe");
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var endereco = document.getElementById("endereco").value;
    var objetivo = document.getElementById("objetivo").value;
    var formacaoAcademica = document.getElementById("formacaoAcademica").value;
    var experienciaProfissional = document.getElementById("experienciaProfissional").value;
  
    innerDoc.getElementById("nome").innerText = nome;
    innerDoc.getElementById("informacoesContato").innerText = "Email: " + email + " | Telefone: " + telefone;
    innerDoc.getElementById("objetivo").innerText = objetivo;
    innerDoc.getElementById("formacaoAcademica").innerText = formacaoAcademica;
    innerDoc.getElementById("experienciaProfissional").innerText = experienciaProfissional;
  
    html2canvas(innerDoc.body).then(function (canvas) {
        var doc = new jsPDF();
        var imageData = canvas.toDataURL("image/jpeg", 1.0);
        doc.addImage(imageData, "JPEG", 15, 15, 180, 240);
        doc.save("modelo_curriculo.pdf");
      });
    }