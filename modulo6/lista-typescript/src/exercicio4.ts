enum Sector {
  MARKETING = "marketing",
  SALES = "sales",
  FINANCIAL = "financeiro",
}

type Person = {
  name: string
  salary: number
  sector: Sector
  inPerson: boolean
}

const collaborators: Person[] = [
  { name: "Marcos", salary: 2500, sector: Sector.MARKETING, inPerson: true },
  { name: "Maria", salary: 1500, sector: Sector.SALES, inPerson: false },
  { name: "Salete", salary: 2200, sector: Sector.FINANCIAL, inPerson: true },
  { name: "João", salary: 2800, sector: Sector.MARKETING, inPerson: false },
  { name: "Josué", salary: 5500, sector: Sector.FINANCIAL, inPerson: true },
  { name: "Natalia", salary: 4700, sector: Sector.SALES, inPerson: true },
  { name: "Paola", salary: 3500, sector: Sector.MARKETING, inPerson: true },
]

const filterMarketingCollaborator: (collaborators: Person[]) => Person[] = (
  collaborators
) => {
  const result = collaborators.filter((collaborator) => {
    return (
      collaborator.sector === Sector.MARKETING && collaborator.inPerson === true
    )
  })

  return result
}

console.log(filterMarketingCollaborator(collaborators))
