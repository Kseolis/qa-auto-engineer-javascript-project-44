#!/usr/bin/env node
import readlineSync from 'readline-sync'
import { gameMenu } from './helpers/gameMenu.js'

const ROUNDS_TO_WIN = 3

export const runGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!\n`)
  const game = gameMenu()

  for (let i = 0; i < ROUNDS_TO_WIN; i++) {
    const { question, correctAnswer } = game.getQuestionAndAnswer()
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
