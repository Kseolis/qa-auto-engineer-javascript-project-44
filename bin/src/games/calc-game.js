import { getRandomNumber } from '../helpers/random-generator.js'

const min = 1
const max = 10

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  return operators[Math.floor(Math.random() * operators.length)]
}

const getCalcResult = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

export const calcGameLogic = () => {
  console.log("brain-calc\n")
  console.log("What is the result of the expression?")

  const num1 = getRandomNumber(min, max)
  const num2 = getRandomNumber(min, max)
  const operator = getRandomOperator()
  const question = `${num1} ${operator} ${num2}`
  const correctAnswer = getCalcResult(num1, operator, num2)
  return { question, correctAnswer }
}