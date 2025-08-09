import readlineSync from 'readline-sync'
import { printWelcome, askUserName, printHello } from './greeting.js'

export const runGame = (generateGameRound, rulesMessage) => {
  const roundsCount = 3

  printWelcome()
  const name = askUserName()
  printHello(name)

  if (rulesMessage) {
    console.log(rulesMessage)
  }

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
