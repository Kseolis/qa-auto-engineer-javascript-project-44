import { getRandomNumber } from '../helpers/random-generator.js'

const isEven = num => num % 2 === 0

export const evenGameLogic = () => {
  const yes = 'yes'
  const no = 'no'

  console.log(`Answer "${yes}" if the number is even, otherwise answer "${no}".`)

  const min = 1
  const max = 100
  const number = getRandomNumber(min, max)
  const question = number
  const correctAnswer = isEven(number) ? yes : no

  return { question, correctAnswer }
}
