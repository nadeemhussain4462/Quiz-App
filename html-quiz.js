const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "Home Tool Markup Language",
      "HyperLinks Text Markup Language",
      "HighText Markup Language",
    ],
    answer: "HyperText Markup Language",
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: ["meta", "title", "head", "h1"],
    answer: "<title>",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["lb", "br", "break", "line"],
    answer: "<br>",
  },
  {
    question:
      "Which attribute specifies a unique identifier for an HTML element?",
    options: ["class", "id", "name", "style"],
    answer: "id",
  },
  {
    question: "Which HTML tag is used to display a horizontal line?",
    options: ["hr", "line", "hline", "border"],
    answer: "<hr>",
  },
  {
    question:
      "Which attribute is used to specify an image's alternative text in HTML?",
    options: ["title", "alt", "src", "description"],
    answer: "alt",
  },
  {
    question: "Which tag is used to create a table in HTML?",
    options: ["table", "grid", "tab", "td"],
    answer: "<table>",
  },
  {
    question: "What is the correct HTML element to define emphasized text?",
    options: ["i", "italic", "em", "b"],
    answer: "<em>",
  },
  {
    question: "Which input type is used to create a checkbox in a form?",
    options: ["radio", "checkbox", "check", "box"],
    answer: "checkbox",
  },
  {
    question: "Which of the following is used to specify a hyperlink in HTML?",
    options: ["a", "link", "url", "hyperlink"],
    answer: "<a>",
  },
];
let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const questionData = questions[currentQuestionIndex];
  questionContainer.innerHTML = `
      <h2>${questionData.question}</h2>
      ${questionData.options
        .map(
          (option, index) =>
            `<label><input type="radio" name="option" value="${option}" onclick="enableNextButton()">${option}</label><br>`
        )
        .join("")}
    `;
}

function enableNextButton() {
  nextBtn.disabled = false;
}

function nextQuestion() {
  const selectedOption = document.querySelector(
    'input[name="option"]:checked'
  ).value;
  const correctAnswer = questions[currentQuestionIndex].answer;

  if (selectedOption === correctAnswer) score++;

  currentQuestionIndex++;


  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextBtn.disabled = true;
  } else {
    showResult();
  }
}

function showResult() {
  questionContainer.innerHTML = `
    <h2>Your Quiz Result</h2>
    <p>You scored ${score} out of ${questions.length}!</p>
    <p>${score >= 7 ? "Great job! You passed the quiz!" : "Keep practicing to improve!"}</p>
    <button onclick="restartQuiz()">Restart Quiz</button>
    <button onclick="goHome()">Back to Home</button>
  `;
  nextBtn.style.display = "none";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
  nextBtn.style.display = "block";
  nextBtn.disabled = true;
}

function goHome() {
  window.location.href = "home.html";
}

loadQuestion();