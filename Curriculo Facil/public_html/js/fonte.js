 function aumentarFonte() {
            var corpo = document.getElementsByTagName("body")[0];
            var tamanhoAtual = window.getComputedStyle(corpo, null).getPropertyValue("font-size");
            var novoTamanho = parseFloat(tamanhoAtual) + 2;
            corpo.style.fontSize = novoTamanho + "px";
        }

        function diminuirFonte() {
            var corpo = document.getElementsByTagName("body")[0];
            var tamanhoAtual = window.getComputedStyle(corpo, null).getPropertyValue("font-size");
            var novoTamanho = parseFloat(tamanhoAtual) - 2;
            corpo.style.fontSize = novoTamanho + "px";}