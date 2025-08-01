import readlineSync from 'readline-sync'
import { EvenGame } from '../games/EvenGame.js'
import { CalcGame } from '../games/CalcGame.js'
import { GsdGame } from '../games/GsdGame.js'
import { validateInput } from './validate-input.js'

export const gameMenu = () => {
  console.log('Please enter the game number and press Enter.')
  console.log('1 - Even')
  console.log('2 - Calc')
  console.log('3 - Gsd')
  console.log('0 - Exit\n')
  const gameNumber = readlineSync.question('Your choice: ')

  validateInput(gameNumber)

  switch (gameNumber) {
    case '0':
      console.log('Goodbye!')
      process.exit(0)
      break
    case '1':
      return new EvenGame()
    case '2':
      return new CalcGame()
    case '3':
      return new GsdGame()
    default:
      console.log(`Invalid game number: ${gameNumber}`)
      process.exit(0)
      break
  }
}
