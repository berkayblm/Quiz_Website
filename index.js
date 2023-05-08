

/*
const saveData = () => {

    for (let i = 0; i < words_B1.length; i++) {

        db.collection("words_B1")
            .add(
                words_B1[i]
            ).then((docRef) => {
            console.log("Document written with ID: ", docRef.id)
        })
            .catch((error) => {
                console.error("Error adding document: ", error)
            })
    }

}
saveData()*/

//TODO: add counter

const levelRadios = document.getElementsByName('level-radio');
const subjectRadios = document.getElementsByName('subject-radio');
const result = document.getElementById("result");
let selectedLevel = "C1 - C2"; //by default
let selectedSubject = "Phrasal Verbs";
//result.innerHTML = "C1 - C2 - Phrasal Verbs";


//test-page.html
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
const main1Div = document.getElementById("main1")
const main2Div = document.getElementById("quiz-card");


let resultArray = [];
resultArray[0] = selectedLevel
resultArray[1] = selectedSubject

let questions = []
let randomQuestions = []
console.log(questions)
let currentQuestionNo = 1

const displayValues = () => {

    result.innerHTML = ""

    for (const radio of levelRadios) {
        if (radio.checked) {
            selectedLevel = radio.labels[0].textContent;
            break;
        }
    }

    for (const radio of subjectRadios) {
        if (radio.checked) {
            selectedSubject = radio.labels[0].textContent;
            break;
        }
    }

    result.innerHTML += selectedLevel + " - " + selectedSubject;
    resultArray = []
    resultArray[0] = selectedLevel
    resultArray[1] = selectedSubject

    console.log(selectedLevel)
    console.log(selectedSubject)


    getRandomWords();


    questions = randomQuestions;
    console.log("SA" + randomQuestions)
    displayQuestion();
    main2Div.classList.remove("hide")

    main1Div.classList.add("hide")




    //document.querySelector(".countdownDiv").classList.remove("hide")

}





function getRandomWords() {

    let collectionName = resultArray[1];
    let collectionLevel = resultArray[0];

    //TODO: collection type will be typed out after user selects a level

    let dbName = "phrasal_verbs"; // default

    if (collectionName === "Phrasal Verbs") {
        dbName = "phrasal_verbs";
    }

    if (collectionName === "All Words" && collectionLevel === "A1 - A2") {
        dbName = "words_A1";
    }

    if (collectionName === "All Words" && collectionLevel === "B1 - B2") {
        dbName = "words_B1";
    }

    if (collectionName === "All Words" && collectionLevel === "C1 - C2") {
        dbName = "words_ALL";
    }


    db.collection(dbName).get().then((querySnapshot) => {
        // Get the size of the query snapshot
        const size = querySnapshot.size;

        // Pick a random index
        let randomNumbersArray = []

        for (let i = 0; i < 11; i++) {

            const randomIndex = Math.floor(Math.random() * size);

            // Get the document at the random index
            const randomDoc = querySnapshot.docs[randomIndex];

            randomNumbersArray.push(randomDoc)
        }
        console.log(dbName)
        for (let element of randomNumbersArray) {
            console.log(element.data())
            randomQuestions.push(element.data())
        }

        console.log(randomNumbersArray)


    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });


}

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
//displayQuestion() // call when it is the first question
function displayQuestion() {

    console.log("QQWEQEWQ"  +  questions.length)
    currentQuestion = questions[currentQuestionNo - 1].eng_name;
    currentQuestionAnswer = questions[currentQuestionNo - 1].tr_name;
    questionName.innerHTML = currentQuestion;


    let questIndexes = [0,1,2,3,4,5,6,7,8,9,10]
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

}





/*
const readData = () => {
    db.collection("words_ALL")
        .get()
        .then((data) => {
            console.log(data.docs.map((item) => {
                return {...item.data()}
            }))
        })
}

*/

/*
const updateData = () => {
    db.collection("users").doc('7mtNLcMPQcrqN78k0i7k')
        .update( {
            email: 'fatihterim@gamil.com',
            password:"terim3"
        })
}*/

/*
const deleteData = () => {
    db.collection("users").doc('7mtNLcMPQcrqN78k0i7k').delete()
        .then(() => {
            alert("Data Deleted")
        })
        .catch((err) => {
            console.log(err)
        })
}
*/