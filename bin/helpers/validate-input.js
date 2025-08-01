

export const validateInput = (input) => {
  if (isNaN(input)) {
    console.log(`${input} is not a number`)
    process.exit(1)
  }
}