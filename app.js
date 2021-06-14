
const form = document.querySelector('.form')
const finalScoreContainer = document.createElement('p')

const correctAnswers = ['B', 'C', 'A', 'B']

let score = 0

form.addEventListener('submit', event => {
    event.preventDefault()

    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value
    ]

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 25
        }
    })
  
    if (score === 0) {
        finalScoreContainer.innerHTML = `${score} ponto. Infelizmente não acertou nenhuma questão =( `
    } else if (score === 100) {
        finalScoreContainer.innerHTML = `${score} pontos. Parabéns!! =)`
    } else {
        finalScoreContainer.innerHTML = `${score} pontos`
    }
    score = 0

    form.insertAdjacentElement('afterend', finalScoreContainer)
    finalScoreContainer.setAttribute('class', 'container')
})
