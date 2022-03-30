const presentation = (name: string, birthDate: string): string => {
  const splitBirthDate: string[] = birthDate.split("/")

  const day: string = splitBirthDate[0]
  const month: string = splitBirthDate[1]
  const year: string = splitBirthDate[2]

  const message = `Olá me chamo ${name}, nasci no dia ${day} do mês ${month} do ano de ${year}`

  return message
}
console.log(presentation("Matheus", "15/12/1994"))
