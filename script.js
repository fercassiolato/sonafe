document.addEventListener('DOMContentLoaded', (event) => {
    const startForm = document.getElementById('start-form');
    const playerNameInput = document.getElementById('player-name');
    const rankingBox = document.getElementById('ranking-box');
    
    // Função para iniciar o jogo
    function startGame() {
        const playerName = playerNameInput.value.trim();
        if (playerName) {
            // Ocultar o formulário
            startForm.style.display = 'none';
            // Mostrar o ranking (ou outra seção do jogo)
            rankingBox.style.display = 'block';
            // Carregar a primeira questão ou iniciar o jogo
            loadNextQuestion();
        } else {
            alert('Por favor, insira seu nome.');
        }
    }

    // Adicionar evento de submit ao formulário
    startForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de recarregar a página
        startGame();
    });

    // Função para carregar a próxima questão (exemplo de implementação)
    function loadNextQuestion() {
        // Implementar a lógica para carregar uma nova questão
        console.log('Carregar a próxima questão.');
    }

    // Função para exibir animação (exemplo de implementação)
    function showAnimation(message, type) {
        const animationBox = document.createElement('div');
        animationBox.className = `animation ${type}`;
        animationBox.innerText = message;
        document.body.appendChild(animationBox);

        setTimeout(() => {
            animationBox.remove();
        }, 2000); // Remove a animação após 2 segundos
    }

    // Função para reiniciar o jogo (exemplo de implementação)
    function resetGame() {
        startForm.style.display = 'block';
        rankingBox.style.display = 'none';
        correctAnswersCount = 0;
        // Limpar outras informações do jogo conforme necessário
    }
});
