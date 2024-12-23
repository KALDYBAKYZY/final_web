<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz Game with Images</title>
  <link rel="stylesheet" href="style2.css">
</head>
<body>
  <div id="quiz-container">
    <h1>Quiz Game</h1>
    <div id="question-container">
      <p id="question"></p>
      <div id="choices-container"></div>
    </div>
    <br><br>
    <button id="next-button" disabled>Next</button>
    <div id="score-container"></div>
  </div>
  <script src="script2.js"></script>
</body>
</html>
//css
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
    margin: 0;
    font-family: Arial, sans-serif;
    text-align: center;
    background-image: url('/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/фон.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0;
  }

  
  #quiz-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 450px;
    max-width: 700px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  h1 {
    color: #2c2c2c;
    font-size: 45px;
  }
  
  #question {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  
  #choices-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  
  .choice-image {
    width: 160px;
    height: 160px;
    border: 3px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s, border-color 0.3s;
  }
  
  .choice-image:hover {
    transform: scale(1.1);
  }
  
  .choice-image.correct {
    border-color: #28a745;
  }
  
  .choice-image.incorrect {
    border-color: #dc3545;
  }
  
  #next-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    background-color: #ffc800;
    color: #000000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  #next-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  #score-container {
    margin-top: 20px;
    font-size: 1rem;
    color: #333;
  }
  //js
  const quizQuestions = [
    {
      question: "Which of these is the Eiffel Tower?",
      choices: [
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/биг бен.jpeg", 
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/будж халифа.jpeg",
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/эйфеловая башня.jpeg",
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/пизанская.jpeg"
      ],
      correctAnswer: 2
    },
    {
      question: "Identify the Colosseum in Rome.",
      choices: [
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/базилика.avif",
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/коллезей.webp", 
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/римский форум.webp",
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/пирамида.jpeg"
      ],
      correctAnswer: 1
    },
    {
      question: "Where is the park of the first president.",
      choices: [
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/кок тобе.jpeg",
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/медеу.jpeg", 
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/парк первого .jpeg",
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/парк горького.jpeg"
      ],
      correctAnswer: 2
    },
    {
      question: "Monument located in the capital of Kazakhstan.",
      choices: [
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/байтерек.jpeg",
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/красная площадб.jpeg", 
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/хан шатыр.jpeg",
        "/Users/gulnazzhaiylgan/Library/Mobile Documents/com~apple~CloudDocs/html/final1/будж халифа.jpeg"
      ],
      correctAnswer: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  const questionElement = document.getElementById("question");
  const choicesContainer = document.getElementById("choices-container");
  const nextButton = document.getElementById("next-button");
  const scoreContainer = document.getElementById("score-container");
  
  function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    choicesContainer.innerHTML = ""; 
    currentQuestion.choices.forEach((imageUrl, index) => {
      const img = document.createElement("img");
      img.src = imageUrl;
      img.classList.add("choice-image");
      img.addEventListener("click", () => handleChoiceClick(index));
      choicesContainer.appendChild(img);
    });
    nextButton.disabled = true; 
  }
  
  function handleChoiceClick(selectedIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const choiceImages = document.querySelectorAll(".choice-image");
    choiceImages.forEach((img) => (img.style.pointerEvents = "none"));
    if (selectedIndex === currentQuestion.correctAnswer) {
      score++;
      choiceImages[selectedIndex].classList.add("correct");
    } else {
      choiceImages[selectedIndex].classList.add("incorrect");
      choiceImages[currentQuestion.correctAnswer].classList.add("correct");
    }
  
    nextButton.disabled = false; 
  }
  
  function showScore() {
    questionElement.textContent = "Quiz Complete!";
    choicesContainer.innerHTML = `Your score is ${score} out of ${quizQuestions.length}🎉`;
    nextButton.style.display = "none"; 
  }
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  });
  loadQuestion();
  
