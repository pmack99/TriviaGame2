var questions = [{
    question: "Babe Ruth played for what professional baseball team before joining the Boston Red Sox on July 11, 1914?",
    option1: "NY Yankees",
    option2: "Baltimore Orioles",
    option3: "NY Giants",
    option4: "Boston Braves",
    answer: 1

},{

    question: "What baseball great is known for such colorful sayings as 'It ain't over till it's over'?",
    option1: "Yogi Berra",
    option2: "Whitey Herzog",
    option3: "Billy Martin",
    option4: "Honus Wagner",
    answer: 0

},{
  
    question: "Graig Nettles played for third base for all of the following teams except...?",
    option1: "NY Yankees",
    option2: "Baltimore Orioles",
    option3: "San Diego Padres",
    option4: "Cleveland Indians",
    answer: 1


}];


var currentQuestion = 0
var score=0;
var totQuestions = questions.length;


var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var nextButton = document.getElementById(nextButton);
var resultContainer = document.getElementById(result);


function loadQuestion(questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + " . " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

function loadNextQuestion(){
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if(!selectedOption){
        alert("Please select answer");
        return;
    }
    var answer = selectedOption.value;
    if(triviaQuestions[currentQuestion].answer == answer){
        correctAnswer++;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = "finish";
    }

    if(currentQuestion == totQuestions){
        container.style.display="none";
        resultContainer.style.display = "";
        resultContainer.textContent= "Your score" + score;
    
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);



