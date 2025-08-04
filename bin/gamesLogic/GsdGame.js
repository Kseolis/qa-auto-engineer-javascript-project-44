import { getRandomNumber } from '../helpers/random-generator.js'
import { getGsd } from '../helpers/game-checks.js'

export class GsdGame {
  constructor() {
    console.log('Find the greatest common divisor of given numbers.')
  }

  getQuestionAndAnswer() {
    const num1 = getRandomNumber(1, 100)
    const num2 = getRandomNumber(1, 100)

    const question = `${num1} and ${num2}`
    const correctAnswer = getGsd(num1, num2)

    return { question, correctAnswer }
  }
}
