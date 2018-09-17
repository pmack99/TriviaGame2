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
    option2: "Cleveland Indians",
    option3: "San Diego Padres",
    option4: "Baltimore Orioles",
    answer: 3

},{

    question: "What is the distance from home plate to the pitching rubber?",
    option1: "46'-6",
    option2: "46'",
    option3: "90'",
    option4: "60'-6",
    answer: 3

},{

    question: "What team moved to Washington, D.C. to become the Washington Nationals in 2005?",
    option1: "Montreal Expos",
    option2: "Washington Senators",
    option3: "Brooklyn Dodgers",
    option4: "Minnesota Twins",
    answer: 0

},{

    question: "Before playing in the Major Leagues, Jackie Robinson played with the minor league Montreal Royals, the top farm club of which organization?",
    option1: "Colt 45's",
    option2: "KC Royals",
    option3: "Brookyn Dodgers",
    option4: "Houston Astros",
    answer: 2
},{

    question: "What player was accused of using too much pine tar on his bat on July 24, 1983, causing his game-winning home run to be nullified?",
    option1: "Graig Nettles",
    option2: "George Brett",
    option3: "Reggie Jackson",
    option4: "Dick Howser",
    answer: 1

},{

    question: "Who is the only pitcher in Major League Baseball to win a World Series game in three different decades?",
    option1: "Whitey Ford",
    option2: "Mike Scott",
    option3: "JR Richard",
    option4: "Jim Palmer",
    answer: 3

},{

    question: "Who holds the highest career batting average of all time?",
    option1: "Ty Cobb",
    option2: "Pete Rose",
    option3: "Ichiro",
    option4: "Dave Kingman",
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
var count=30;


var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var counter=setInterval(timer, 1000); 
var nextButton = document.getElementById(nextButton);

$(document).ready(function() {
    console.log( "ready!" );
});


$('#startBtn').on('click', function(){
    $(this).hide();
    loadQuestion();
    timer();
});


$('#reStartBtn').on('click', function(){
    $(this).hide();
    $('#resultsContainer').hide();
    $("#quizContainer").show();
    newGame();
});



function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     unanswered++;
     loadQuestion();
     $('#message').html(messages.endTime);
     return;
  }

  document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
}

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
    $('#unanswered').empty();
    $('#opt1').empty();
    $('#opt2').empty();
    $('#opt3').empty();
    $('#opt4').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
    unanswered = 0;
    loadQuestion();
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
            console.log(selectedOption.value);
            currentQuestion++;
            $('#message').html(messages.correct);
            console.log(messages.correct);
            

        //need to clear the radio button value after checking answer

        //document.getElementById('clear-button').addEventListener('click', function () {
           // ["opt1", "opt2", "opt3", "opt4"].forEach(function(id) {
            //  document.getElementById(id).checked = false;
           // });
           // return false;
         // })
    }
    selectedOption.checked == false;
    currentQuestion++;
    incorrectAnswer++;
    console.log(selectedOption.value);
    $('#message').html(messages.incorrect);
    console.log(messages.incorrect);


        if(currentQuestion == totQuestions){

             container.style.display="none";
             $('#resultsContainer').show();
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



