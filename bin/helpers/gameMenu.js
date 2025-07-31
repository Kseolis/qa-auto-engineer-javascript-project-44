import readlineSync from 'readline-sync'
import { EvenGame } from '../games/EvenGame.js'
import { CalcGame } from '../games/CalcGame.js'

export const gameMenu = () => {
  console.log('Please enter the game number and press Enter.')
  console.log('1 - Even')
  console.log('2 - Calc')
  console.log('0 - Exit')
  const gameNumber = readlineSync.question('Your choice: ')

  switch (gameNumber) {
    case '0':
      console.log('Goodbye!')
      process.exit(0)
      break
    case '1':
      return new EvenGame()
    case '2':
      return new CalcGame()
    default:
      throw new Error(`Invalid game number: ${gameNumber}`)
  }
}
