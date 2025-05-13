const config = {
    OPENAI_API_KEY: "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",
    OPENAI_API_URL: "https://api.openai.com/v1/chat/completions"
};

async function callChatGPT(userMessage) {
    try {
        const response = await fetch(config.OPENAI_API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${config.OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // ou "gpt-4" se seu plano permitir
                messages: [
                    { role: "user", content: userMessage }
                ],
                temperature: 0.7,
                max_tokens: 200
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Erro ${response.status}: ${errorData.error.message}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

    } catch (error) {
        console.error("Falha na requisição:", error.message);
        return null;
    }
}

// Exemplo de uso
(async () => {
    const resposta = await callChatGPT("Explique o que é Node.js em 2 linhas.");
    console.log("Resposta do ChatGPT:", resposta);
})();
