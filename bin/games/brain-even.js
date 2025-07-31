#!/usr/bin/env node
import { runGame } from '../index.js'
import { getRandomNumber } from '../helpers/randomGenerator.js'
import { isEven } from '../helpers/gameChecks.js'

export const evenGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    const number = getRandomNumber()
    const question = number
    const correctAnswer = isEven(number) ? 'yes' : 'no'

  return { question, correctAnswer }
}

runGame(evenGame)