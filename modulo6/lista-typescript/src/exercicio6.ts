type Account = {
  client: string
  totalBalance: number
  debits?: number[]
}

const accounts: Account[] = [
  { client: "João", totalBalance: 1000, debits: [100, 200, 300] },
  { client: "Paula", totalBalance: 7500, debits: [200, 1040] },
  { client: "Pedro", totalBalance: 10000, debits: [5140, 6100, 100, 2000] },
  { client: "Luciano", totalBalance: 100, debits: [100, 200, 1700] },
  { client: "Artur", totalBalance: 1800, debits: [200, 300] },
  { client: "Soter", totalBalance: 1200, debits: [] },
]

const searchDebtorClient: (accounts: Account[]) => Account[] = (accounts) => {
  const verifyDebits = accounts.map((account) => {
    const totalDebits = account.debits.reduce((prev, next) => {
      return (prev += next)
    }, 0)
    account.totalBalance -= totalDebits
    return account
  }).filter((account) => {
      return account.totalBalance < 0
  })
  return verifyDebits
}

console.log(searchDebtorClient(accounts));
