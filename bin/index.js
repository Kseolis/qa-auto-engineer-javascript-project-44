#!/usr/bin/env node
import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!\n`)

const roundsCount = 3

export const runGame = (game) => {
  for (let i = 0; i < roundsCount; i++) {
    const { question, correctAnswer } = game()
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
