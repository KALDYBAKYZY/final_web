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
  