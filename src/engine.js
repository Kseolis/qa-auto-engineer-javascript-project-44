import readlineSync from 'readline-sync'
import { welcomeUser} from './greeting.js'

export const runGame = (generateGameRound, description) => {
  const roundsCount = 3

  welcomeUser()
  console.log(description)

  for (let i = 0; i < roundsCount; i++) {
    const { question, correctAnswer } = generateGameRound()
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `)

    if (userAnswer === correctAnswer.toString()) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
