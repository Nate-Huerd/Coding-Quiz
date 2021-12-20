// questions
var questions = [
    {
        title: "Question 1",
        choices: ['option1', 'option2', 'option3', 'option4'],
        answer: 'answer',
    },

    {
        title: "Question 2",
        choices: ['option1', 'option2', 'option3', 'option4'],
        answer: 'answer',
    },

    {
        title: "Question 3",
        choices: ['option1', 'option2', 'option3', 'option4'],
        answer: 'answer',
    },

    {
        title: "Question 4",
        choices: ['option1', 'option2', 'option3', 'option4'],
        answer: 'answer',
    },

    {
        title: "Question 5",
        choices: ['option1', 'option2', 'option3', 'option4'],
        answer: 'answer',
    },
];


//Declare variables here
var timer = document.querySelector("#startTimer");
var currentTime = document.querySelector("#currentTime");
var questions = document.querySelector("#questions");
var holdInterval = 0;
var questions = 0;
var ulCreate = document.createElement("ul");

//Set seconds left and countdown here
var timeLeft = 60;
var countdown = function(num) {
    for (var i = num; i > 0; i--) {
        console.log(i);
    }
};
//Set time penalty for incorrect answer
var penalty = 5;

//function needed for timer. Timer to start once start quiz button is clicked. Starts to render first question on screen
timer.addEventListener("click", function() {
    if (holdInterval === 0) {
        holdInterval = setInterval(function() {
            timeLeft--;
            currentTime.textContent = "Time remaining: " + timeLeft;
        
            if (timeLeft <= 0) {
                clearInterval(holdInterval);
                endTime();
                currentTime.textContent = "You're out of time!";
            }
        }, 1000);
    }
    render(questions);
});

//render function needed
function render(questions) {
    for (var i = 0; i < questions.length; i++) {
        var userQuestions = questions[questions].title;
        var selectableChoices = questions[questions].choices;
        questions.textContent = userQuestions;
    }
    selectableChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questions.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (checkanswer));
    })
}

//Check whether answer was correct
function compareAnswer(event) {
    var element = event.target;
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        
        if (element.textContent === questions[questions].answer) {
            score++;
            createDiv.textContent = "Your answer is correct";
        }
        else {
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Your answer is incorrect";
        }
    }
}

//var sumArray = function(arr) {
    //var result = 0;

    //for (var i = 0; i < arr.length; i++) {
       // var currentNumber = arr[i];
        //result += currentNumber;
    //}

    //return result;
//};



//Think about these:
//Create a new element
//var ulCreate = document.createElement("ul");
//Save initials and final score

//Criteria:
//GIVEN I am taking a code quiz
//WHEN I click the Start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and score