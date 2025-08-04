#!/usr/bin/env node
import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!\n`)

const ROUNDS_TO_WIN = 3

export const runGame = (game) => {
  for (let i = 0; i < ROUNDS_TO_WIN; i++) {
    const { question, correctAnswer } = game.getQuestionAndAnswer()
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `)

    if (userAnswer === correctAnswer.toString()) {
      console.log('\nCorrect!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!\n`)
      return
    }
  }
  console.log(`Congratulations, ${name}!\n`)
}
