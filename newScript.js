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