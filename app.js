const correctAnswers = ['D', 'C', 'A', 'B']

const form = document.querySelector('.form')
const paragraph = document.createElement('p')
let score = 0
console.log(paragraph)
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
    form.insertAdjacentElement('afterend', paragraph)

    paragraph.setAttribute('class', 'container')

    if (score === 0) {
        paragraph.innerHTML = `${score} ponto. Infelizmente não acertou nenhuma questão =( `
    } else if (score === 100) {
        paragraph.innerHTML = `${score} pontos. Parabéns!! =)`
    } else {
        paragraph.innerHTML = `${score} pontos`
    }
    score = 0
})
