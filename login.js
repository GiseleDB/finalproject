// Captura o formulário pelo ID
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        // Envia os dados ao backend
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }), // Dados no formato JSON
        });

        // Lida com a resposta do backend
        const result = await response.json();
        if (response.ok) {
            alert(result.message); // Exibe mensagem de sucesso
        } else {
            alert(result.message); // Exibe mensagem de erro
        }
    } catch (error) {
        console.error('Erro ao enviar os dados:', error);
        alert('Erro ao conectar ao servidor.');
    }
});
