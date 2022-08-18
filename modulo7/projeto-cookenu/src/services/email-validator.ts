export const emailValidator = (email: string): boolean => {
  const emailRegex = new RegExp(/\S+@\S+\.\S+/)
  return emailRegex.test(email)
}
