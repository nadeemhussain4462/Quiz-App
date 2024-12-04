const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { question: "What is 3 + 5?", options: ["5", "6", "8", "9"], answer: "8" },
    // Add more questions here
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
    const selectedOption = document.querySelector('input[name="option"]:checked').value;
    const correctAnswer = questions[currentQuestionIndex].answer;
  
    if (selectedOption === correctAnswer) score++;
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      nextBtn.disabled = true;
    } else {
      localStorage.setItem("quiz1Score", score);
      window.location.href = "result.html";
    }
  }
  
  loadQuestion();
  