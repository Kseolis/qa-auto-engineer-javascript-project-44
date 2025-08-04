import { getRandomNumber } from '../helpers/random-generator.js'
import { isPrime } from '../helpers/game-checks.js'

export class PrimeGame {
  constructor() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
  }

  getQuestionAndAnswer() {
    const question = getRandomNumber(1, 100)
    const correctAnswer = isPrime(question) ? 'yes' : 'no'
    return { question, correctAnswer }
  }
}
