#!/usr/bin/env node
import { getRandomNumber } from '../helpers/random-generator.js'
import { isEven } from '../helpers/game-checks.js'

export class EvenGame {
  min = 1
  max = 100

  constructor() {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
  }

  getQuestionAndAnswer() {
    const number = getRandomNumber(this.min, this.max)
    const question = number
    const correctAnswer = isEven(number) ? 'yes' : 'no'

    return { question, correctAnswer }
  }
}
