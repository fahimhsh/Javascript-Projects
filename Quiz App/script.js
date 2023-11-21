const questions = [
    {
        questions: 'What Does Fahim likes most?',
        answers: [
            {text: 'Coding something New', correct: false},
            {text: 'Chillin\' with Bondhus...', correct: false},
            {text: 'Bondhuder Takay Khawa', correct: false},
            {text: 'Poralekha kora', correct: true}
        ]
    },
    {
        questions: 'Which position is Fahim\'s favourite?',
        answers: [
            {text: 'Missionary', correct: false},
            {text: 'Doggystyle', correct: false},
            {text: 'Central Back', correct: true},
            {text: '69', correct: false}
        ]
    },
    {
        questions: 'How Much Rich fahim wants to be?',
        answers: [
            {text: 'Private Jet Level rich', correct: true},
            {text: 'Bugatti level rich', correct: false},
            {text: 'Toyota Supra Level rich', correct: false},
            {text: 'Cycle Level rich', correct: false}
        ]
    },
]

const questionElement = document.getElementById("question") 
const answerButton = document.getElementById("answerButtons")
const nextButton = document.getElementById("nextBtn")

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}
function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1
    questionElement.innerHTML = questionNo + '. '  +  currentQuestion.questions

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text 
        button.classList.add("btn")
        answerButton.appendChild(button) 
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    })
}
function resetState() {
    nextButton.style.display = "none"
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.classList.add("correct")
        score++
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
    nextButton.style.display = "block"
}
function showScore() {
    resetState()
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}
function handleNextButton() {
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
        handleNextButton()
    } else {
        startQuiz()
    }
})

startQuiz()

























