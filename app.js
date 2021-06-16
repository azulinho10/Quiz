
const form = document.querySelector('form')
const finalScoreContainer = document.createElement('p')
const finalScore = document.querySelector('.score')

const correctAnswers = ['B', 'C', 'A', 'B']

let score = 0
let counter = 0

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]


    const incrementCounterQuestionsCorrect = (userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }

    }
    const finish = setInterval(() => {

        finalScore.textContent = `${counter}%`

        if (counter === score) {
            clearInterval(finish)
        }
        counter++

    }, 20)

    userAnswers.forEach(incrementCounterQuestionsCorrect)
    scrollTo(0, 0)

    if (score === 0) {
        finalScoreContainer.innerHTML = `
         Infelizmente não acertou nenhuma questão =( `
    } else if (score === 100) {
        finalScoreContainer.innerHTML = `  
        Parabéns =)`
    }
    // score = 0

    form.insertAdjacentElement('afterend', finalScoreContainer)
    finalScoreContainer.setAttribute('class', 'container-message-score')

    form.classList.add('form')
})

