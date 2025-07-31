export const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  return randomNumber
}

export const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  return operators[Math.floor(Math.random() * operators.length)]
}
