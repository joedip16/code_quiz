//Dom elements from html file
var startBtn = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionsScreen = document.getElementById("question-screen");
var gameOverScreen = document.getElementById("game-over-screen");
var answers = []
var index = 0
var score = 0

var questions = [
    {
        q: "What is the name of the Philadelphia NFL team?",
        answers: ["Eagles", "Falcons", "Patriots", "Cardinals"],
        correctAnswer: "Eagles"
    },
    {
        q: "What is the name of the Philadelphia MLB team?",
        answers: ["Red Sox", "Braves", "Phillies", "Tigers"],
        correctAnswer: "Phillies"
    },
    {
        q: "What is the name of the Philadelphia NBA team?",
        answers: ["Suns", "Lakers", "Pistons", "76ers"],
        correctAnswer: "76ers"
    },
    {
        q: "What is the name of the Philadelphia NHL team?",
        answers: ["Penguins", "Flyers", "Capitols", "Lightning"],
        correctAnswer: "Flyers"
    },
];

function questionBuilder() {
    if (index >= questions.length) {
        endGame();
        return;
    }
    console.log('index', index)
    console.log('questions object', questions[index])
    questionsScreen.innerHTML = questions[index].q         
    for (var i = 0; i < questions[index].answers.length; i++) {
        var answerButton = document.createElement("BUTTON");
        answerButton.innerHTML = questions[index].answers[i];
        answerButton.setAttribute("value", questions[index].answers[i])
        questionsScreen.appendChild(answerButton)

        answerButton.addEventListener("click", function (event) {
            console.log(event.target.value)
            if (event.target.value === questions[index].correctAnswer) {
                score++
                console.log("correct")
                console.log(score)
                
            }
            else if (event.target.value !== questions[index].correctAnswer) {
                console.log("incorrect")
            } 
            
                index++;
            questionBuilder();
            

        })
    }
}


startBtn.addEventListener("click", function () {
    console.log("button clicked")
    startScreen.style.display = "none"
    questionsScreen.style.display = "block";
    questionBuilder();
})

function endGame() {
    console.log("game over!")
    questionsScreen.style.display = "none";
    gameOverScreen.innerHTML = "Game Over! Your score is " + score 
}