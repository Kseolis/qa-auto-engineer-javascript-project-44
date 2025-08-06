import { getRandomNumber } from '../helpers/random-generator.js'

const makeProgression = (start, step, length, hiddenIndex) => {
  let question = ''
  let correctAnswer = ''
  for (let i = 0; i < length; i++) {
    const number = start + i * step
    if (i === hiddenIndex) {
      correctAnswer = number
      question += '.. '
    }
    else {
      question += `${number.toString() + ' '}`
    }
  }
  return { question, correctAnswer }
}

export const progressionGameLogic = () => {
  console.log('brain-progression\n')
  console.log('What number is missing in the progression?')

  const start = getRandomNumber(1, 100)
  const step = getRandomNumber(1, 10)
  const length = getRandomNumber(5, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)

  return makeProgression(start, step, length, hiddenIndex)
}
