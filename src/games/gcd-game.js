import { getRandomNumber } from '../helpers/random-generator.js'

const getGcd = (num1, num2) => {
  const min = Math.min(num1, num2)
  const max = Math.max(num1, num2)
  let nod = 1
  for (let i = 1; i <= min; i++) {
    if (min % i === 0 && max % i === 0) {
      nod = i
    }
  }
  return nod
}

export const description = 'Find the greatest common divisor of given numbers.'

export const generateGcdRound = () => {
  const minNumber = 1
  const maxNumber = 100

  const num1 = getRandomNumber(minNumber, maxNumber)
  const num2 = getRandomNumber(minNumber, maxNumber)

  const question = `${num1} ${num2}`
  const correctAnswer = getGcd(num1, num2)

  return { question, correctAnswer }
}
