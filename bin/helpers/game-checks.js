export const isEven = num => num % 2 === 0

export const getCalcResult = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      throw new Error(`Unknown operator: ${operator}`)
  }
}

export const getGsd = (num1, num2) => {
  const min = Math.min(num1, num2)
  const max = Math.max(num1, num2)
  let nod = 1
  for (let i = 1; i <= min; i++) {
    if (min % i === 0 && max % i === 0) {
      nod = i
    }
  }
  return nod
}
