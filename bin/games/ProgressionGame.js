import { getRandomNumber } from '../helpers/random-generator.js'

export class ProgressionGame {
  constructor() {
    console.log('What number is missing in the progression?')
  }

  getQuestionAndAnswer() {
    let question = ''
    let correctAnswer = ''
    const start = getRandomNumber(1, 100)
    const step = getRandomNumber(1, 10)
    const length = getRandomNumber(5, 10)
    const hiddenIndex = getRandomNumber(0, length - 1)
  
    for (let i = 0; i < length; i++) {
      const number = start + i * step
      if (i === hiddenIndex) {
        correctAnswer = number
        question += '.. '
      } else {
        question += `${number.toString() + ' '}`
      }
    }
    return { question, correctAnswer }
  }
}