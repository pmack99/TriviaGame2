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

},{

    question: "What baseball great is known for such colorful sayings as 'It ain't over till it's over'?",
    option1: "Yogi Berra",
    option2: "Whitey Herzog",
    option3: "Billy Martin",
    option4: "Honus Wagner",
    answer: 0


}];


var messages = {
	correct: "YES! You are right!",
	incorrect: "STRIKE! You missed it.",
	endTime: "You're Out...    of time!",
	finished: "Alright! Let's look at the scorecard..."
}

var currentQuestion = 0;
var correctAnswer =0;
var incorrectAnswer =0;
var unanswered = 0;
var totQuestions = questions.length;
var seconds = 0;
var time = 0;


var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var nextButton = document.getElementById(nextButton);
var resultContainer = document.getElementById(result);


$('#startBtn').on('click', function(){
    $(this).hide();
    newGame();
});

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
}




function loadQuestion(questionIndex){
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + " . " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
    $("#currentQuestion").html("Question #"+(currentQuestion+1)+" / "+questions.length);
    
}

function checkAnswer(){
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if(!selectedOption){
        alert("Please select answer");
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        correctAnswer++;
        console.log(correctAnswer);
        currentQuestion++;
        $('#message').html(messages.correct);
        console.log(messages.correct);
    }
    selectedOption.checked = false;
    currentQuestion++;
    incorrectAnswer--;
    console.log(incorrectAnswer);
    $('#message').html(messages.incorrect);
    console.log(messages.incorrect);


    if(currentQuestion == totQuestions){
        container.style.display="none";
        $('#finalMessage').show();
        $('#finalMessage').html(messages.finished);
        $('#correctAnswers').show();
        $('#correctAnswers').html("Correct = " + correctAnswer);
        $('#incorrectAnswers').show();
        $('#incorrectAnswers').html("Incorrect = " + incorrectAnswer);
        $('#unanswered').show();
        $('#unanswered').html("Unanswered = " + unanswered);
        
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);



