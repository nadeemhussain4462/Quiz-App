const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "<b>HyperText Markup Language</b>",
      "<b>Home Tool Markup Language</b>",
      "<b>HyperLinks Text Markup Language</b>",
      "<b>HighText Markup Language</b>",
    ],
    answer: "<b>HyperText Markup Language</b>",
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: ["&lt;meta&gt;", "&lt;title&gt;", "&lt;head&gt;", "&lt;h1&gt;"],
    answer: "&lt;title&gt;",
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["&lt;lb&gt;", "&lt;br&gt;", "&lt;break&gt;", "&lt;line&gt;"],
    answer: "&lt;br&gt;",
  },
  {
    question: "Which attribute specifies a unique identifier for an HTML element?",
    options: ["class", "id", "name", "style"],
    answer: "id",
  },
  {
    question: "Which HTML tag is used to display a horizontal line?",
    options: ["&lt;hr&gt;", "&lt;line&gt;", "&lt;hline&gt;", "&lt;border&gt;"],
    answer: "&lt;hr&gt;",
  },
  {
    question: "Which attribute is used to specify an image's alternative text in HTML?",
    options: ["title", "alt", "src", "description"],
    answer: "alt",
  },
  {
    question: "Which tag is used to create a table in HTML?",
    options: ["&lt;table&gt;", "&lt;grid&gt;", "&lt;tab&gt;", "&lt;td&gt;"],
    answer: "&lt;table&gt;",
  },
  {
    question: "What is the correct HTML element to define emphasized text?",
    options: ["&lt;i&gt;", "&lt;italic&gt;", "&lt;em&gt;", "&lt;b&gt;"],
    answer: "&lt;em&gt;",
  },
  {
    question: "Which input type is used to create a checkbox in a form?",
    options: ["radio", "checkbox", "check", "box"],
    answer: "checkbox",
  },
  {
    question: "Which of the following is used to specify a hyperlink in HTML?",
    options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;url&gt;", "&lt;hyperlink&gt;"],
    answer: "&lt;a&gt;",
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
        (option) =>
          `<label><input type="radio" name="option" value="${option}" onclick="enableNextButton()"> ${option}</label><br>`
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
  localStorage.setItem("htmlQuizScore", score);
  questionContainer.innerHTML = `
    <h2>Your Quiz Result</h2>
    <p>You scored ${score} out of ${questions.length}!</p>
    <p>${
      score >= 7
        ? "Great job! You passed the quiz!"
        : "Keep practicing to improve!"
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
