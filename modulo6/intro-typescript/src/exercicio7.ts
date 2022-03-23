const convertDNA: (dna: string) => string = (dna) => {
  const arrayDNA: string[] = dna.split("")
  const arrayRNA: string[] = arrayDNA.map((item) => {
    switch (item) {
      case "A":
        return "U"
        break
      case "T":
        return "A"
        break
      case "C":
        return "G"
        break
      default:
        return "C"
        break
    }
  })
  return arrayRNA.join("")
}
console.log(convertDNA("ATTGCTGCGCATTAACGACGCGTA"))

