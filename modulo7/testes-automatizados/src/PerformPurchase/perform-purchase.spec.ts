import { performPurchase, User } from './perform-purchase'

describe('performPurchase', () => {
  test('Testing balance greater than value', () => {
    const user: User = {
      name: 'Matheus',
      balance: 500
    }

    const result = performPurchase(user, 100)

    expect(result).toEqual({
      ...user,
      balance: 400
    })
  })

  test('Testing balance greater than value', () => {
    const user: User = {
      name: 'Matheus',
      balance: 500
    }

    const result = performPurchase(user, 500)

    expect(result).toEqual({
      ...user,
      balance: 0
    })
  })

  test('Testing balance greater than value', () => {
    const user: User = {
      name: 'Matheus',
      balance: 500
    }

    const result = performPurchase(user, 600)

    expect(result).not.toBeDefined()
  })
})
