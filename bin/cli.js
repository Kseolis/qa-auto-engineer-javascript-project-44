import readlineSync from 'readline-sync'

export const brainGames = () => {
  console.log('\nbrain-games')
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!\n`)
}
