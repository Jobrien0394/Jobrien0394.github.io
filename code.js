// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// my global variables
let score = 0
let clues = []
const randomNumber = Math.floor(Math.random() * 40951);

// Elements
const clueContainer = document.getElementById('clue-container')
let scoreCount = document.querySelector('.score-count')
let userInput = document.querySelector('#user-answer')
const categoryContainer = document.getElementById('category-container')

// A fetch that gets up to 100 questions from a random category.
function getQuestions() {
    let url = `https://jservice.kenzie.academy/api/clues?category=${randomNumber}`
    
    fetch (url)
    .then(response => response.json())
    .then(data => {
            clues = data.clues
        console.log(data.clues)
        quizGame()
    })
    .catch(error => console.log(error))
}
getQuestions()

// a function that gets clues from another category when the user clicks on the new category button.
function newCategory() {
    let url = 'https://jservice.kenzie.academy/api/clues?category=13041'
    fetch (url)
    .then(response => response.json())
    .then(data => {
        clues = data.clues
        console.log(data.clues)
        quizGame()
    })
}

let answer
function quizGame() {
    let i = Math.floor(Math.random() * clues.length)
    console.log(clues[i].question)
    clueContainer.innerHTML = clues[i].question
    categoryContainer.innerHTML = `Category: ${clues[i].category.title}`
    console.log(`Answer: ${clues[i].answer}`)
    answer = clues[i].answer
    message.innerHTML = ''
    scoreCount.innerHTML = score
}

// My reset game function
function resetGame() {
    window.location.reload()
}

let message = document.getElementById('message')

// My scorekeeper function
    function scoreKeeper() {
        if (userInput.value === answer) {
            score++
            console.log(userInput.value, answer)
            message.innerHTML= 'correct!'
            userInput.value = ''
        }
        else if (userInput.value.toLowerCase().trim() === answer.toLowerCase()) {
            score++
            console.log(userInput.value, answer)
            message.innerHTML= 'correct!'
            userInput.value = ''
        }
        else {
            console.log(userInput.value, answer)
            message.innerHTML = 'incorrect!'
            score = 0
            userInput.value = ''
        }
        scoreCount.innerHTML = score
        getQuestions()
    }


// My Eventhandlers
document.getElementById('form').addEventListener('submit', event =>
{
    event.preventDefault()
    scoreKeeper()
    //i = randomNumber
})
 document.getElementById('nextQuestion').addEventListener('click', quizGame)
document.getElementById('reset').addEventListener('click', resetGame)
document.getElementById('newCategory').addEventListener('click', newCategory)