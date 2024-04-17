function rand() {
    return Math.floor(Math.random() * 7) + 1;
}

function jackpot() {
    // Obter os elementos reel1, reel2 e reel3
    var reel1 = document.getElementById("reel1");
    var reel2 = document.getElementById("reel2");
    var reel3 = document.getElementById("reel3");

    // Função para atualizar os números aleatórios com atraso
    function updateNumbers() {
        reel1.textContent = rand();
        reel2.textContent = rand();
        reel3.textContent = rand();

        var a = reel1.textContent;
        var b = reel2.textContent;
        var c = reel3.textContent;

        // Verificar se todos os números são iguais
        if (!(a == b && b == c)) {
            // Se não forem iguais, atualizar novamente após um pequeno atraso
            setTimeout(updateNumbers, 100); // Atraso de 100 milissegundos
        }
    }

    // Iniciar a atualização dos números aleatórios
    updateNumbers();
}
