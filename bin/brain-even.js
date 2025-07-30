import readlineSync from 'readline-sync'
import { name } from './cli.js'

const isEven = (num) => num % 2 === 0

export const brainEven = () => {
    const roundsToWin = 3
    let correctAnswers = 0
    console.log('Answer "yes" if the number is even, otherwise answer "no".')

    while (correctAnswers < roundsToWin) {
        const number = Math.floor(Math.random() * 100) + 1
        const answer = isEven(number) ? 'yes' : 'no'
        const question = number
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `)

        if (userAnswer === answer) {
            console.log('Correct!')
            correctAnswers++
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
            console.log(`Let's try again, ${name}!`)
            return
        }
    }
    console.log(`Congratulations, ${name}!`)
}