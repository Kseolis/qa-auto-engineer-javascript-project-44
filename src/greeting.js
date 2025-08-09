import readlineSync from 'readline-sync'

export const printWelcome = () => {
  console.log('Welcome to the Brain Games!')
}

export const askUserName = () => {
  return readlineSync.question('May I have your name? ')
}

export const printHello = (name) => {
  console.log(`Hello, ${name}!`)
}
