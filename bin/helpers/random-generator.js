export const getRandomNumber = (min, max) => {
  // nosonar - Math.random() is acceptable
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  return randomNumber
}

export const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  // nosonar - Math.random() is acceptable
  return operators[Math.floor(Math.random() * operators.length)]
}
