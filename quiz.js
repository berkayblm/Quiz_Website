

/*
const container =document.getElementById("container");
const scoreContainer =document.querySelector(".score-container")
const nextButton = document.getElementById("next-button");
const options = Array.from(document.querySelectorAll(".options button"))
const optionA = document.getElementById("section-A");
const optionB = document.getElementById("section-B");
const optionC = document.getElementById("section-C");
const optionD = document.getElementById("section-D");
const questionName = document.getElementById("question-name");
const currentQuestionNm = document.getElementsByClassName("question-number-span");
const userScore = document.getElementById("user-score");
const restartButton = document.getElementById("restart");

const questions = JSON.parse(localStorage.getItem("questionArray"))
let currentQuestionNo = 1
console.log(JSON.parse(localStorage.getItem("questionArray")))

nextButton.addEventListener("click", () => {
    console.log(questions)
    currentQuestionNo++;

    if (currentQuestionNo == questions.length + 1) {

        //hide question container display score and restart button
        container.classList.add("hide");
        scoreContainer.classList.remove("hide");
        nextButton.classList.add("hide");
        userScore.innerHTML = "Your score : " + totalScore;

    }

    else {

        // current question number
        document.querySelector(".question-number-span").innerHTML =
            `<span>${currentQuestionNo} of 10 Questions</span>`

        // show score and restart btns
        enableButtons()
        displayQuestion();
    }




})
let currentQuestion;
let currentQuestionAnswer;
displayQuestion() // call when it is the first question
function displayQuestion() {

    currentQuestion = questions[currentQuestionNo - 1].eng_name;
    currentQuestionAnswer = questions[currentQuestionNo - 1].tr_name;
    questionName.innerHTML = currentQuestion;


    let questIndexes = [0,1,2,3,4,5,6,7,8,9]
    let randomNumberArray = [];
    randomNumberArray.push(currentQuestionNo - 1); //add index of current quest nm

    const index = questIndexes.indexOf(currentQuestionNo- 1);
    if (index > -1) {
        questIndexes.splice(index, 1); // 2nd parameter means remove one item only
    }
    console.log(questIndexes)

    //generate 3 random index
    for(let i = 0; i < 3; i++) {

        let theRandomNumber = Math.floor(Math.random() * questIndexes.length); // creates random index from 0 to 9

        randomNumberArray.push(questIndexes[theRandomNumber]); // push to array
        if (theRandomNumber > -1) {
            questIndexes.splice(theRandomNumber, 1); // 2nd parameter means remove one item only
        }
        // questIndexes.filter(element => element !== theRandomNumber); // remove the index
    }

    const shuffledArray = randomNumberArray.sort((a, b) => 0.5 - Math.random());

    optionA.innerText = questions[shuffledArray[0]].tr_name;
    optionB.innerText = questions[shuffledArray[1]].tr_name;
    optionC.innerText = questions[shuffledArray[2]].tr_name;
    optionD.innerText = questions[shuffledArray[3]].tr_name;
    console.log(questIndexes)
    console.log(randomNumberArray)

}


function checkAnswer(selectedButton) {

    let userAnswer = selectedButton.innerText;
    let correctFlag = false;

    if (userAnswer === currentQuestionAnswer) {
        selectedButton.classList.add("correct");
        correctFlag = true;
    }
    else {
        selectedButton.classList.add("incorrect");
        correctFlag = false;
        options.forEach(button => { // show the correct answer
            if (button.innerText === currentQuestionAnswer) {
                button.classList.add("correct");
                return;
            }
        })

    }
    calculateScore(correctFlag);
    disableButtons();

}

function disableButtons() {
    options.forEach(button => {
        button.disabled = true;
    })
}

function enableButtons() {
    options.forEach(button => {
        button.disabled = false;
        button.classList.remove("correct")
        button.classList.remove("incorrect")
    })

}
let totalScore = 0
function calculateScore(correctFlag) {

    if (correctFlag) {
        totalScore += 10;
    }

}*/
