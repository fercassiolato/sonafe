let correctAnswersCount = 0; // Contador de respostas corretas

let ranking = JSON.parse(localStorage.getItem('ranking')) || [];

// Função para tratar a resposta
function handleAnswer(isCorrect) {
    if (isCorrect) {
        correctAnswersCount++; // Incrementar o contador de respostas corretas
        showAnimation("Resposta Correta!", "success");
        setTimeout(() => {
            loadNextQuestion(); // Avançar para a próxima questão
        }, 2000); // Avançar após 2 segundos
    } else {
        showAnimation("GAME OVER", "error");
        setTimeout(() => {
            resetGame(); // Voltar para a tela inicial após 3 segundos
        }, 3000); // Voltar para a tela inicial após 3 segundos
    }
}

// Função para exibir animações
function showAnimation(message, type) {
    // Criar e exibir uma animação dependendo do tipo (sucesso ou erro)
    const animationBox = document.createElement('div');
    animationBox.className = `animation ${type}`;
    animationBox.innerText = message;
    document.body.appendChild(animationBox);

    setTimeout(() => {
        animationBox.remove();
    }, 2000); // Remove a animação após 2 segundos
}

// Função para carregar a próxima questão
function loadNextQuestion() {
    // Aqui você deve carregar a próxima questão aleatoriamente
    // Esta função precisa ser implementada com base na lógica do seu jogo
}

// Função para reiniciar o jogo
function resetGame() {
    document.getElementById('start-form').style.display = 'block'; // Mostrar tela inicial
    document.getElementById('ranking-box').style.display = 'none'; // Ocultar ranking
    correctAnswersCount = 0; // Resetar o contador de respostas corretas
    // Limpar outras informações do jogo conforme necessário
}

// Função para atualizar o ranking
function updateRanking(name, score) {
    ranking.push({ name: name, score: score });
    ranking.sort((a, b) => b.score - a.score); // Ordenar pelo maior score
    if (ranking.length > 10) {
        ranking = ranking.slice(0, 10); // Manter apenas os 10 primeiros
    }
    localStorage.setItem('ranking', JSON.stringify(ranking));
    displayRanking(); // Atualizar exibição do ranking
}

// Função para exibir o ranking
function displayRanking() {
    const rankingList = document.getElementById('ranking-list');
    rankingList.innerHTML = ''; // Limpar ranking atual
    ranking.forEach((player, index) => {
        const row = `<tr><td>${index + 1}</td><td>${player.name}</td><td>${player.score}</td></tr>`;
        rankingList.innerHTML += row;
    });
}

// Adicionar evento de submit no formulário
document.getElementById('start-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impedir o comportamento padrão de recarregar a página

    const playerName = document.getElementById('player-name').value;
    if (playerName) {
        document.getElementById('start-form').style.display = 'none'; // Ocultar o formulário
        document.getElementById('ranking-box').style.display = 'block'; // Mostrar ranking
        // Iniciar o jogo aqui, carregando a primeira questão
        loadNextQuestion();
    } else {
        alert('Por favor, insira seu nome.');
    }
});

// Exemplo de como iniciar o jogo (adapte conforme sua lógica de jogo)
function startGame() {
    document.getElementById('start-form').style.display = 'none'; // Ocultar formulário
    document.getElementById('ranking-box').style.display = 'block'; // Mostrar ranking
    loadNextQuestion(); // Carregar a primeira questão
}
