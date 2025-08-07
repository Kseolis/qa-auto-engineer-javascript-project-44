import { getRandomNumber } from '../helpers/random-generator.js'

const makeProgression = (start, step, length) => {
  const question = []
  for (let i = 0; i < length; i++) {
    question.push(start + i * step)
  }
  return question
}

export const generateProgressionRound = () => {
  console.log('What number is missing in the progression?')

  const start = getRandomNumber(1, 100)
  const step = getRandomNumber(1, 10)
  const length = getRandomNumber(5, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const progression = makeProgression(start, step, length)
  const correctAnswer = progression.at(hiddenIndex)
  const question = progression
    .map((number, id) => (id === hiddenIndex ? '..' : number))
    .join(' ')

  return { question, correctAnswer }
}
