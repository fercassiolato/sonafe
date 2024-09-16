let currentQuestionIndex = 0;
let questions = [];

fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data;
    });

function startQuiz() {
    document.getElementById('start-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    document.getElementById('feedback').innerText = '';
    document.getElementById('next-question-btn').classList.add('hidden');
    document.getElementById('check-answer-btn').classList.add('hidden');

    let question = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').innerText = question.question;

    let choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    question.choices.forEach((choice, index) => {
        let button = document.createElement('button');
        button.innerText = String.fromCharCode(65 + index) + ". " + choice; // A, B, C, D, E
        button.className = 'choice-btn';
        button.onclick = () => selectAnswer(button, index);
        choicesContainer.appendChild(button);
    });

    document.selectedAnswer = null;
    document.currentQuestion = question;
}

function selectAnswer(button, index) {
    document.selectedAnswer = index;
    let buttons = document.getElementsByClassName('choice-btn');
    for (let btn of buttons) {
        btn.style.backgroundColor = ''; // Reset background
    }
    button.style.backgroundColor = '#d3d3d3'; // Highlight selected
    document.getElementById('check-answer-btn').classList.remove('hidden');
}

function checkAnswer() {
    if (document.selectedAnswer === null) {
        alert('Selecione uma alternativa!');
        return;
    }

    let correct = document.currentQuestion.correctAnswer;
    let feedback = document.getElementById('feedback');

    if (document.selectedAnswer === correct) {
        feedback.innerText = 'Correto!';
        feedback.style.color = 'green';
        feedback.className = 'correct';
    } else {
        feedback.innerText = 'Incorreto!';
        feedback.style.color = 'red';
        feedback.className = 'incorrect';
    }

    document.getElementById('check-answer-btn').classList.add('hidden');
    document.getElementById('next-question-btn').classList.remove('hidden');
}
