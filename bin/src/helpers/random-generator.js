export const getRandomNumber = (min, max) => {
  // nosonar - Math.random() is acceptable
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
  return randomNumber
}
