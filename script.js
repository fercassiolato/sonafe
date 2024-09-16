let correctAnswersCount = 0; // Contador de respostas corretas

let ranking = JSON.parse(localStorage.getItem('ranking')) || [];

// Função para tratar a resposta
function handleAnswer(isCorrect) {
    if (isCorrect) {
        correctAnswersCount++; // Incrementar o contador de respostas corretas
        showAnimation("Resposta Correta!", "success");
        setTimeout(() => {
            loadNextQuestion(); // Avançar
