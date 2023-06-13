$(document).ready(function() {
  $("#modelo").change(function() {
    var modeloSelecionado = $(this).val();
    var iframe = $("#iframe");

    if (modeloSelecionado === "modeloCurriculo.html") {
      iframe.attr("src", "modeloCurriculo.html");
    } else if (modeloSelecionado === "modeloCurriculo2.html") {
      iframe.attr("src", "modeloCurriculo2.html");
    } else {
      // Modelo inválido
      alert("Por favor, escolha um modelo válido");
    }
  });

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

function obterCoordenadasIframe() {
  var iframe = document.getElementById("iframe");
  var rect = iframe.getBoundingClientRect();

  var coordenadas = {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height
  };

  console.log(coordenadas);
}


function gerarPDF() {
  var modeloSelecionado = $("#modelo").val();
  var iframe = document.getElementById("iframe");
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

  if (modeloSelecionado === "") {
    alert("Por favor, selecione um modelo primeiro");
    return;
  }

  var doc = new jsPDF({
    orientation: "portrait",
    unit: "mm"
  });

  html2canvas(innerDoc.body, {
    useCORS: true
  }).then(function(canvas) {
    var pdfWidth = doc.internal.pageSize.getWidth();
    var pdfHeight = doc.internal.pageSize.getHeight();

    var imgData = canvas.toDataURL("image/jpeg", 10.0);

    // Defina as coordenadas para ajustar o conteúdo dentro do PDF
    var offsetX = -25;
    var offsetY = 5;
    var imageWidth = pdfWidth - 2 * offsetX;
    var imageHeight = pdfHeight - 2 * offsetY;

    doc.addImage(imgData, "JPEG", offsetX, offsetY, imageWidth, imageHeight);
    doc.save("modelo_curriculo.pdf");
  });
}
