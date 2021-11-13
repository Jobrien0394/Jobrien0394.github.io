// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// my global variables
let score = 0
let clues = []
const randomNumber = Math.floor(Math.random() * 40951);
//const randomQuestion = Math.floor(Math.random() * clues.length)
//let currentClue = []

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
        //let clues = data.map(data => {
            clues = data.clues
            //clues.push(currentClue.question)
        //})
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
//i = randomQuestion
let answer
function quizGame() {
    let i = Math.floor(Math.random() * clues.length)
    console.log(clues[i].question)
    clueContainer.innerHTML = clues[i].question
    // if (i > clues.length) {
        //     nextQuestion()
        // }
    // clueContainer.innerHTML = clues[i].question
    categoryContainer.innerHTML = `Category: ${clues[i].category.title}`
    console.log(`Answer: ${clues[i].answer}`)
    answer = clues[i].answer
    message.innerHTML = ''
    scoreCount.innerHTML = score
}


// a function that clears the input text to be used after the submit button is clicked
// function clearInput() {
    //     document.getElementById('user-answer').reset();
// }
// a function that suffles the clues array
// let arrayShuffle = function(clues) {
//     let newPos,
//     temp;
    
//     for (let i = clues.length - 1; i > 0; i--) {
//         newPos = Math.floor(Math.random() * (i + 1));
//         temp = clues[i];
//         clues[i] = clues[newPos];
//         clues[newPos] = temp;
//     }
//     return clues;
// };

//currentClue = clues[i]
//console.log(`Answer: ${currentClue.answer}`);
//clueContainer.append(currentClue.question)



//  My next question function to be used for the next button.
// function nextQuestion() {
//     message.innerHTML = ''
//     let i = Math.floor(Math.random() * clues.length)
//     clues[i].question
//     console.log(clues)
// }



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
            //currentClue.question[i++]
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

 