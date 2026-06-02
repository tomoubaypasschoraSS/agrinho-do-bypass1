const form = document.getElementById("formDoacao");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const quantidade = document.getElementById("quantidade").value;

    mensagem.innerHTML = `
        Obrigado, <strong>${nome}</strong>! 🌱<br>
        Sua contribuição de <strong>${quantidade}</strong> mudas foi registrada.
        Juntos vamos ajudar a reflorestar a Amazônia!
    `;

    form.reset();
});