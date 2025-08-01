#!/usr/bin/env node
import { getRandomNumber, getRandomOperator } from '../helpers/random-generator.js'
import { getCalcResult } from '../helpers/game-checks.js'

export class CalcGame {
  min = 1
  max = 10

  constructor() {
    console.log('What is the result of the expression?')
  }

  getQuestionAndAnswer() {
    const num1 = getRandomNumber(this.min, this.max)
    const num2 = getRandomNumber(this.min, this.max)
    const operator = getRandomOperator()

    const question = `${num1} ${operator} ${num2}`
    const correctAnswer = getCalcResult(num1, operator, num2)
    return { question, correctAnswer }
  }
}
