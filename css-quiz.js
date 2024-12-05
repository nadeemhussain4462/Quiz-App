const cssQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which property is used to change the background color in CSS?",
    options: ["background", "color", "bgcolor", "background-color"],
    answer: "background-color",
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["text-style", "font-style", "text-size", "font-size"],
    answer: "font-size",
  },
  {
    question: "Which is the correct CSS syntax to make all paragraphs bold?",
    options: [
      "p {font-weight: bold;}",
      "p {text: bold;}",
      "p {style: bold;}",
      "p {font: bold;}",
    ],
    answer: "p {font-weight: bold;}",
  },
  {
    question: "Which property is used to add space inside an element’s border?",
    options: ["margin", "padding", "spacing", "border-spacing"],
    answer: "padding",
  },
  {
    question: "How do you add a comment in CSS?",
    options: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "# This is a comment",
    ],
    answer: "/* This is a comment */",
  },
  {
    question:
      "Which property is used to set the spacing between lines of text?",
    options: ["letter-spacing", "line-height", "text-spacing", "text-height"],
    answer: "line-height",
  },
  {
    question: "Which CSS property is used to make text italic?",
    options: ["font-style", "text-decoration", "font-weight", "font-variant"],
    answer: "font-style",
  },
  {
    question: "How do you select an element with the id 'header' in CSS?",
    options: ["#header", ".header", "header", "id=header"],
    answer: "#header",
  },
  {
    question: "Which property is used to change the font of an element?",
    options: ["font-family", "font-weight", "font-style", "font"],
    answer: "font-family",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const questionData = cssQuestions[currentQuestionIndex];
  questionContainer.innerHTML = `
    <h2>${questionData.question}</h2>
    ${questionData.options
      .map(
        (option) =>
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
  const correctAnswer = cssQuestions[currentQuestionIndex].answer;

  if (selectedOption === correctAnswer) score++;

  currentQuestionIndex++;

  if (currentQuestionIndex < cssQuestions.length) {
    loadQuestion();
    nextBtn.disabled = true;
  } else {
    showResult();
  }
}

function showResult() {
  localStorage.setItem("cssQuizScore", score);
  questionContainer.innerHTML = `
    <h2>Your Quiz Result</h2>
    <p>You scored ${score} out of ${cssQuestions.length}!</p>
    <p>${
      score >= 7
        ? "Excellent work! You passed the quiz!"
        : "Keep practicing CSS to improve!"
    }</p>
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
