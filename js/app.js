// Sign-up and Login Logic
document.getElementById('signUpForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }));
    window.location.href = 'login.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === document.getElementById('loginEmail').value && user.password === document.getElementById('loginPassword').value) {
        window.location.href = 'index.html';
    } else {
        alert('Invalid login credentials');
    }
});

// Start Quiz Logic
function startQuiz(quizType) {
    window.location.href = `quiz.html?quiz=${quizType}`;
}

// Timer and Quiz Logic for HTML, CSS, JS
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;

const quizQuestions = {
    html: [
        { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'None of the above'], correct: 0 },
        { question: 'What is the correct HTML element for inserting a line break?', options: ['<break>', '<br>', '<lb>', '<hr>'], correct: 1 },
        // Add more HTML questions
    ],
    css: [
        { question: 'What does CSS stand for?', options: ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style Sheets', 'Cascading Simple Sheets'], correct: 0 },
        // Add more CSS questions
    ],
    js: [
        { question: 'Which company developed JavaScript?', options: ['Netscape', 'Microsoft', 'Oracle', 'Sun Microsystems'], correct: 0 },
        // Add more JS questions
    ]
};

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = `${timeLeft}s`;
        if (timeLeft === 0) {
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizType = urlParams.get('quiz');
    const questions = quizQuestions[quizType];
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('questionContainer');
    
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        ${question.options.map((opt, idx) => `
            <label>
                <input type="radio" name="answer" value="${idx}">
                ${opt}
            </label>
        `).join('<br>')}
    `;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    const quizType = new URLSearchParams(window.location.search).get('quiz');
    if (selectedOption) {
        const question = quizQuestions[quizType][currentQuestionIndex];
        if (parseInt(selectedOption.value) === question.correct) {
            score++;
        }
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions[quizType].length) {
        loadQuestion();
    } else {
        clearInterval(timer);
        window.location.href = 'result.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/quiz.html') {
        loadQuestion();
        startTimer();
    } else if (window.location.pathname === '/result.html') {
        document.getElementById('score').innerText = `Score: ${score}`;
        document.getElementById('percentage').innerText = `Percentage: ${(score / quizQuestions[quizType].length) * 100}%`;
    }
});
