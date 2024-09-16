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
        }, 3000); // Voltar para tela inicial após 3 segundos
    }
}

function showAnimation(message, type) {
    // Exibir uma animação dependendo se a resposta está correta ou errada
}
