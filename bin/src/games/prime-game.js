import { getRandomNumber } from '../helpers/random-generator.js'

const isPrime = (num) => {
  if (num <= 1) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

export const primeGameLogic = () => {
  const brainPrime = "brain-prime"
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  const question = getRandomNumber(1, 100)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'
  return { question, correctAnswer }
}
