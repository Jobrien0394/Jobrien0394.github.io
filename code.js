// my global variables
let score = 0
let categories = []
let value = 0
var randomNumber = Math.floor(Math.random() * 40951)
var randomNumber2 = Math.floor(Math.random() * 40951)
var randomNumber3 = Math.floor(Math.random() * 40951)
var randomNumber4 = Math.floor(Math.random() * 40951)
var randomNumber5 = Math.floor(Math.random() * 40951)
var randomNumber6 = Math.floor(Math.random() * 40951)


// Elements
let message = document.getElementById('message')
const clueContainer = document.querySelector('.question-container')
const clueText = document.querySelector('.clue-text')
let scoreCount = document.querySelector('.score-count')
let categoryContainer = document.getElementById('.category')
let category1 = document.getElementById('category1')
let category2 = document.getElementById('category2')
let category3 = document.getElementById('category3')
let category4 = document.getElementById('category4')
let category5 = document.getElementById('category5')
let category6 = document.getElementById('category6')
let userInput = document.getElementById('user-answer')
let submitButton = document.getElementById('submit-button')
let answerForm = document.getElementById('answer-form')
let currentAnswer = document.querySelector('.correct-answer')



let url1 = `https://jservice.kenzie.academy/api/clues?category=${randomNumber}`
let url2 = `https://jservice.kenzie.academy/api/clues?category=${randomNumber2}`
let url3 = `https://jservice.kenzie.academy/api/clues?category=${randomNumber3}`
let url4 = `https://jservice.kenzie.academy/api/clues?category=${randomNumber4}`
let url5 = `https://jservice.kenzie.academy/api/clues?category=${randomNumber5}`
let url6 = `https://jservice.kenzie.academy/api/clues?category=${randomNumber6}`
Promise.all([
    fetch(url1).then(response => response.json()),
    fetch(url2).then(response => response.json()),
    fetch(url3).then(response => response.json()),
    fetch(url4).then(response => response.json()),
    fetch(url5).then(response => response.json()),
    fetch(url6).then(response => response.json()),
])
.then((data) => {
    categories.push(data[0], data[1], data[2], data[3], data[4], data[5])
    const entries = Object.values(categories)
    console.log(entries)
    category1.innerHTML = entries[0].clues[0].category.title
    category2.innerHTML = entries[1].clues[0].category.title
    category3.innerHTML = entries[2].clues[0].category.title
    category4.innerHTML = entries[3].clues[0].category.title
    category5.innerHTML = entries[4].clues[0].category.title
    category6.innerHTML = entries[5].clues[0].category.title
})


        scoreCount.innerHTML = score


// My scorekeeper function
    function scoreKeeper() {
            if (userInput.toLowerCase().trim() === answer.toLowerCase()) {
            score += value
            message.innerHTML= 'CORRECT!'
            message.style.color = 'green'
        }
        else {
            message.innerHTML = 'INCORRECT!'
            message.style.color = 'red'
            score -= value
        }
        scoreCount.innerHTML = score
    }


// My Eventhandlers
document.getElementById('value0').addEventListener('click',() => {
    document.getElementById('value0').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[0].clues[0].question}`)
    answerForm.style.visibility = 'visible'
    answer = categories[0].clues[0].answer
    currentAnswer.innerHTML = answer
    value = 200
    scoreKeeper()
})
document.getElementById('value1').addEventListener('click', () => {
    document.getElementById('value1').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[1].clues[0].question}`)
    answer = categories[1].clues[0].answer
    currentAnswer.innerHTML = answer
    value = 200
    scoreKeeper()
})
document.getElementById('value2').addEventListener('click', () => {
    document.getElementById('value2').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[2].clues[0].question}`)
    answer = categories[2].clues[0].answer
    currentAnswer.innerHTML = answer
    value = 200
    scoreKeeper()
})
document.getElementById('value3').addEventListener('click', () => {
    document.getElementById('value3').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[3].clues[0].question}`)
    answer = categories[3].clues[0].answer
    currentAnswer.innerHTML = answer
    value = 200
    scoreKeeper()
})
document.getElementById('value4').addEventListener('click', () => {
    document.getElementById('value4').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[4].clues[0].question}`)
    answer = categories[4].clues[0].answer
    currentAnswer.innerHTML = answer
    value = 200
    scoreKeeper()
})
document.getElementById('value5').addEventListener('click', () => {
    document.getElementById('value5').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[5].clues[0].question}`)
    answer = categories[5].clues[0].answer
    currentAnswer.innerHTML = answer
    value = 200
    scoreKeeper()
})


document.getElementById('value6').addEventListener('click', () => {
    document.getElementById('value6').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[0].clues[1].question}`)
    answer = categories[0].clues[1].answer
    currentAnswer.innerHTML = answer
    value = 400
    scoreKeeper()
})
document.getElementById('value7').addEventListener('click', () => {
    document.getElementById('value7').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[1].clues[1].question}`)
    answer = categories[1].clues[1].answer
    currentAnswer.innerHTML = answer
    value = 400
    scoreKeeper()
})
document.getElementById('value8').addEventListener('click', () => {
    document.getElementById('value8').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[2].clues[1].question}`)
    answer = categories[2].clues[1].answer
    currentAnswer.innerHTML = answer
    value = 400
    scoreKeeper()
})
document.getElementById('value9').addEventListener('click', () => {
    document.getElementById('value9').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[3].clues[1].question}`)
    answer = categories[3].clues[1].answer
    currentAnswer.innerHTML = answer
    value = 400
    scoreKeeper()
})
document.getElementById('value10').addEventListener('click', () => {
    document.getElementById('value10').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[4].clues[1].question}`)
    answer = categories[4].clues[1].answer
    currentAnswer.innerHTML = answer
    value = 400
    scoreKeeper()
})
document.getElementById('value11').addEventListener('click', () => {
    document.getElementById('value11').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[5].clues[1].question}`)
    answer = categories[5].clues[1].answer
    currentAnswer.innerHTML = answer
    value = 400
    scoreKeeper()
})


document.getElementById('value12').addEventListener('click', () => {
    document.getElementById('value12').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[0].clues[2].question}`)
    answer = categories[0].clues[2].answer
    currentAnswer.innerHTML = answer
    value = 600
    scoreKeeper()
})
document.getElementById('value13').addEventListener('click', () => {
    document.getElementById('value13').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[1].clues[2].question}`)
    answer = categories[1].clues[2].answer
    currentAnswer.innerHTML = answer
    value = 600
    scoreKeeper()
})
document.getElementById('value14').addEventListener('click', () => {
    document.getElementById('value14').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[2].clues[2].question}`)
    answer = categories[2].clues[2].answer
    currentAnswer.innerHTML = answer
    value = 600
    scoreKeeper()
})
document.getElementById('value15').addEventListener('click', () => {
    document.getElementById('value15').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[3].clues[2].question}`)
    answer = categories[3].clues[2].answer
    currentAnswer.innerHTML = answer
    value = 600
    scoreKeeper()
})
document.getElementById('value16').addEventListener('click', () => {
    document.getElementById('value16').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[4].clues[2].question}`)
    answer = categories[4].clues[2].answer
    currentAnswer.innerHTML = answer
    value = 600
    scoreKeeper()
})
document.getElementById('value17').addEventListener('click', () => {
    document.getElementById('value17').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[5].clues[2].question}`)
    answer = categories[5].clues[2].answer
    currentAnswer.innerHTML = answer
    value = 600
    scoreKeeper()
})


document.getElementById('value18').addEventListener('click', () => {
    document.getElementById('value18').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[0].clues[3].question}`)
    answer = categories[0].clues[3].answer
    currentAnswer.innerHTML = answer
    value = 800
    scoreKeeper()
})
document.getElementById('value19').addEventListener('click', () => {
    document.getElementById('value19').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[1].clues[3].question}`)
    answer = categories[1].clues[3].answer
    currentAnswer.innerHTML = answer
    value = 800
    scoreKeeper()
})
document.getElementById('value20').addEventListener('click', () => {
    document.getElementById('value20').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[2].clues[3].question}`)
    answer = categories[2].clues[3].answer
    currentAnswer.innerHTML = answer
    value = 800
    scoreKeeper()
})
document.getElementById('value21').addEventListener('click', () => {
    document.getElementById('value21').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[3].clues[3].question}`)
    answer = categories[3].clues[3].answer
    currentAnswer.innerHTML = answer
    value = 800
    scoreKeeper()
})
document.getElementById('value22').addEventListener('click', () => {
    document.getElementById('value22').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[4].clues[3].question}`)
    answer = categories[4].clues[3].answer
    currentAnswer.innerHTML = answer
    value = 800
    scoreKeeper()
})
document.getElementById('value23').addEventListener('click', () => {
    document.getElementById('value23').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[5].clues[3].question}`)
    answer = categories[5].clues[3].answer
    currentAnswer.innerHTML = answer
    value = 800
    scoreKeeper()
})

document.getElementById('value24').addEventListener('click', () => {
    document.getElementById('value24').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[0].clues[4].question}`)
    answer = categories[0].clues[4].answer
    currentAnswer.innerHTML = answer
    value = 1000
    scoreKeeper()
})
document.getElementById('value25').addEventListener('click', () => {
    document.getElementById('value25').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[1].clues[4].question}`)
    answer = categories[1].clues[4].answer
    currentAnswer.innerHTML = answer
    value = 1000
    scoreKeeper()
})
document.getElementById('value26').addEventListener('click', () => {
    document.getElementById('value26').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[2].clues[4].question}`)
    answer = categories[2].clues[4].answer
    currentAnswer.innerHTML = answer
    value = 1000
    scoreKeeper()
})
document.getElementById('value27').addEventListener('click', () => {
    document.getElementById('value27').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[3].clues[4].question}`)
    answer = categories[3].clues[4].answer
    currentAnswer.innerHTML = answer
    value = 1000
    scoreKeeper()
})
document.getElementById('value28').addEventListener('click', () => {
    document.getElementById('value28').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[4].clues[4].question}`)
    answer = categories[4].clues[4].answer
    currentAnswer.innerHTML = answer
    value = 1000
    scoreKeeper()
})
document.getElementById('value29').addEventListener('click', () => {
    document.getElementById('value29').style.visibility = 'hidden'
    userInput = prompt(`Question: ${categories[5].clues[4].question}`)
    answer = categories[5].clues[4].answer
    currentAnswer.innerHTML = answer
    value = 1000
    scoreKeeper()
})