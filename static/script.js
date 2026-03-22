function sendMessage() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat");

    const message = input.value.trim();
    if (message === "") return;

    // Mensagem do usuário
    chat.innerHTML += `
        <div class="message user">
            👤 ${message}
        </div>
    `;
    chat.scrollTop = chat.scrollHeight;

    input.value = "";

    // Mensagem temporária do bot (loading)
    const loadingId = Date.now();
    chat.innerHTML += `
        <div class="message bot" id="loading-${loadingId}">
            🤖 Digitando...
        </div>
    `;
    chat.scrollTop = chat.scrollHeight;

    fetch("/ask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            question: message
        })
    })
    .then(response => response.json())
    .then(data => {
        const loadingMsg = document.getElementById(`loading-${loadingId}`);
        if (loadingMsg) loadingMsg.remove();

        chat.innerHTML += `
            <div class="message bot">
                🤖 ${data.answer}
            </div>
        `;
        chat.scrollTop = chat.scrollHeight;
    })
    .catch(error => {
        console.error("Erro:", error);

        const loadingMsg = document.getElementById(`loading-${loadingId}`);
        if (loadingMsg) {
            loadingMsg.innerHTML = "⚠️ Erro ao se comunicar com o servidor.";
        }
    });
}

// Enviar com Enter
document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("userInput");
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});