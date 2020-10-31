var start = document.getElementById("start").addEventListener("click", function(){
document.getElementById("demo").innerHTML = "game started";
})
var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var ChoiceC = document.getElementById("C")
var choiceD = document.getElementById("D")
var score = 0;

var questions = [
    {q: "What is the name of the Philadelphia NFL team?", choiceA : "Eagles",choiceB : "Falcons", ChoiceC : "Patriots", ChoiceD : "Cardinals"},
    {q: "What is the name of the Philadelphia MLB team?", a: "Phillies"},
    {q: "What is the name of the Philadelphia NBA team?", a: "76ers"},
    {q: "What is the name of the Philadelphia NHL team?", a: "Flyers"}
]

for(var i = 0; i < questions.length; i++){
//    var answers = prompt(questions[i].q)
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