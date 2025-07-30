import readlineSync from 'readline-sync'

const name = readlineSync.question('May I have your name? ')

export const brainGames = () => {
  console.log('\nbrain-games')
  console.log('Welcome to the Brain Games!')
  console.log(`Hello, ${name}!\n`)
}

export { name }