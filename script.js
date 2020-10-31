var start = document.getElementById("start").addEventListener("click", function(){
document.getElementById("demo").innerHTML = "game started";
})
function renderQuestion(){
question.innerHTML = ""
;question.textContent = question.length;
for(var i=0; i < question.length; i++){
    var li = document.createElement("li");
    li.textContent = questions[i];
}
}
var container = doncument.getElementById("container");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var ChoiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var score = 0;

var questions = [
    {q: "What is the name of the Philadelphia NFL team?", choiceA : "Eagles",choiceB : "Falcons", ChoiceC : "Patriots", ChoiceD : "Cardinals", correct : A},
    // {q: "What is the name of the Philadelphia MLB team?", a: "Phillies"},
    // {q: "What is the name of the Philadelphia NBA team?", a: "76ers"},
    // {q: "What is the name of the Philadelphia NHL team?", a: "Flyers"}
]

for(var i = 0; i < questions.length; i++){
   var answers = prompt(questions[i].q)
   console.log(answers)
   if (answers === questions[i].a){
    score ++
   alert("You are Correct")
   }
else{
    alert("Incorrect")
}


}
alert("you got " + score + "/" + questions.length)