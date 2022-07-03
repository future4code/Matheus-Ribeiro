export enum LOCATION {
  EUA = 'EUA',
  BRAZIL = 'BRAZIL'
}

export enum NATIONALITY {
  BRAZILIAN = 'BRAZILIAN',
  AMERICAN = 'AMERICAN'
}

export interface User {
  name: string
  age: number
  nacionality: NATIONALITY
}

export interface Casino {
  name: string
  location: LOCATION
}

export interface Result {
  brazilians: ResultItem
  americans: ResultItem
}

export interface ResultItem {
  allowed: string[]
  unallowed: string[]
}

export function verifyAge(casino: Casino, users: User[]): Result {
  return users.reduce(
    (acc, user) => {
      if (casino.location === LOCATION.EUA) {
        if (user.nacionality === NATIONALITY.AMERICAN && user.age >= 21)
          acc.americans.allowed.push(user.name)

        if (user.nacionality === NATIONALITY.AMERICAN && user.age < 21)
          acc.americans.unallowed.push(user.name)

        if (user.nacionality === NATIONALITY.BRAZILIAN && user.age >= 21)
          acc.brazilians.allowed.push(user.name)

        if (user.nacionality === NATIONALITY.BRAZILIAN && user.age < 21)
          acc.brazilians.unallowed.push(user.name)
      }

      if (casino.location === LOCATION.BRAZIL) {
        if (user.nacionality === NATIONALITY.AMERICAN && user.age >= 18)
          acc.americans.allowed.push(user.name)

        if (user.nacionality === NATIONALITY.AMERICAN && user.age < 18)
          acc.americans.unallowed.push(user.name)

        if (user.nacionality === NATIONALITY.BRAZILIAN && user.age >= 18)
          acc.brazilians.allowed.push(user.name)

        if (user.nacionality === NATIONALITY.BRAZILIAN && user.age < 18)
          acc.brazilians.unallowed.push(user.name)
      }

      return acc
    },
    {
      brazilians: {
        allowed: [],
        unallowed: []
      },
      americans: {
        allowed: [],
        unallowed: []
      }
    } as Result
  )
}
