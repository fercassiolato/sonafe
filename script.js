function handleAnswer(isCorrect) {
    if (isCorrect) {
        showAnimation("Resposta Correta!", "success");
        setTimeout(() => {
            loadNextQuestion();
        }, 2000); // Avançar após 2 segundos
    } else {
        showAnimation("GAME OVER", "error");
        setTimeout(() => {
            resetGame();
        }, 3000); // Voltar para tela inicial após 5 segundos
    }
}

function showAnimation(message, type) {
    // Exibir uma animação dependendo se a resposta está correta ou errada
}
let correctAnswersCount = 0;

let ranking = JSON.parse(localStorage.getItem('ranking')) || [];

function updateRanking(name, score) {
    ranking.push({ name: name, score: score });
    ranking.sort((a, b) => b.score - a.score); // Ordena pelo maior score
    if (ranking.length > 10) {
        ranking = ranking.slice(0, 10); // Mantém apenas os 10 primeiros
    }
    localStorage.setItem('ranking', JSON.stringify(ranking));
    displayRanking();
}

function displayRanking() {
    const rankingList = document.getElementById('ranking-list');
    rankingList.innerHTML = ''; // Limpar ranking atual
    ranking.forEach((player, index) => {
        const row = `<tr><td>${index + 1}</td><td>${player.name}</td><td>${player.score}</td></tr>`;
        rankingList.innerHTML += row;
    });
}

function handleAnswer(isCorrect) {
    if (isCorrect) {
        correctAnswersCount++;
        // Exibir o número de respostas corretas na tela
    }
}
