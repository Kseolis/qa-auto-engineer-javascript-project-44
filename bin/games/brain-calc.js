#!/usr/bin/env node
import { runGame } from '../index.js'
import { getRandomNumber, getRandomOperator } from '../helpers/randomGenerator.js'
import { calculateResult } from '../helpers/gameChecks.js'

export const calcGame = () => {
  console.log('What is the result of the expression?')
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()
  const operator = getRandomOperator()

  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = calculateResult(num1, operator, num2)

  return { question, correctAnswer }
}
  
runGame(calcGame)
