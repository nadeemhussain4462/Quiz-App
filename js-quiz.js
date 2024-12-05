const jsQuestions = [
  {
    question:
      "What is the correct syntax for referring to an external script called 'app.js'?",
    options: [
      "<script href='app.js'>",
      "<script name='app.js'>",
      "<script src='app.js'>",
      "<script file='app.js'>",
    ],
    answer: "<script src='app.js'>",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: "<script>",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "msg('Hello World');",
      "alertBox('Hello World');",
      "msgBox('Hello World');",
      "alert('Hello World');",
    ],
    answer: "alert('Hello World');",
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["*", "=", "-", "+"],
    answer: "=",
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: ["var myVar;", "variable myVar;", "v myVar;", "myVar var;"],
    answer: "var myVar;",
  },
  {
    question: "Which of the following is a JavaScript data type?",
    options: ["number", "boolean", "string", "All of the above"],
    answer: "All of the above",
  },
  {
    question:
      "Which method is used to convert JSON data into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.objectify()",
      "JSON.toJS()",
    ],
    answer: "JSON.parse()",
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "** This is a comment **",
    ],
    answer: "// This is a comment",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: ["onchange", "onmouseover", "onmouseclick", "onclick"],
    answer: "onclick",
  },
  {
    question: "What is the correct way to write an IF statement in JavaScript?",
    options: ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if i = 5"],
    answer: "if (i == 5)",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
  const questionData = jsQuestions[currentQuestionIndex];
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
  const correctAnswer = jsQuestions[currentQuestionIndex].answer;

  if (selectedOption === correctAnswer) score++;

  currentQuestionIndex++;

  if (currentQuestionIndex < jsQuestions.length) {
    loadQuestion();
    nextBtn.disabled = true;
  } else {
    showResult();
  }
}

function showResult() {
  // Store the JavaScript quiz score
  localStorage.setItem('jsQuizScore', score);

  // Fetch scores from all quizzes
  const htmlScore = parseInt(localStorage.getItem('htmlQuizScore')) || 0;
  const cssScore = parseInt(localStorage.getItem('cssQuizScore')) || 0;
  const jsScore = parseInt(localStorage.getItem('jsQuizScore')) || 0;

  // Calculate the combined result
  const totalScore = htmlScore + cssScore + jsScore;
  const totalQuestions = 30; // 10 questions per quiz
  const percentage = Math.round((totalScore / totalQuestions) * 100);

  // Display the combined result
  questionContainer.innerHTML = `
    <h2>Your Combined Quiz Result</h2>
    <p><strong>HTML Quiz Score:</strong> ${htmlScore} / 10</p>
    <p><strong>CSS Quiz Score:</strong> ${cssScore} / 10</p>
    <p><strong>JavaScript Quiz Score:</strong> ${jsScore} / 10</p>
    <h3><strong>Total Score:</strong> ${totalScore} / ${totalQuestions}</h3>
    <p><strong>Percentage:</strong> ${percentage}%</p>
    <p>${
      percentage >= 70
        ? "Congratulations! You passed all quizzes!"
        : "Keep practicing to improve your skills!"
    }</p>
    <button onclick="restartQuiz()">Restart JavaScript Quiz</button>
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
